import { Subscription } from 'rxjs/Subscription';

import { Component, HostBinding, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignNote } from '../../../../../shared/entities/campaign-note';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CampaignNotesService } from '../shared/campaign-notes.service';

@Component({
  selector: 'campaign-notes-list',
  templateUrl: './campaign-notes-list.component.html',
  styleUrls: ['./campaign-notes-list.component.scss']
})
export class CampaignNotesListComponent implements OnInit, OnDestroy {

  campaign: Campaign;
  _notes: CampaignNote[];
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private notesService: CampaignNotesService
  ) { }

  /**
   * Retorna as notas aplicando filtro de anotações do mestre de jogo
   * @return {CampaignNote[]} Notas de Campanha
   */
  get filteredNotes(): CampaignNote[] {
    if (!this._notes) return [];
    if (this.isCampaignOwner()) return this._notes;
    return this._notes.filter((note) => !note.dm_only);
  }

  /**
   * Verifica se o usuário atual é o mestre de jogo da campanha
   * @return {boolean} Resultado da verificação
   */
  isCampaignOwner(): boolean {
    return this.authService.isCurrentUser(this.campaign.dungeonMaster);
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.parent.parent.parent.params.subscribe((params) => {
      let campaign_id = params['campaign_id'];
      if (campaign_id) {
        this.campaignsService.find(campaign_id).subscribe((res) => {
          this.campaign = res;
          this.subscription = this.notesService.listChildren(campaign_id)
            .subscribe((notes) => this._notes = notes);
        });
      }
    });
  }

  get notes(): CampaignNote[] {
    return this._notes || [];
  }

  /**
   * Verifica se deve exibir o toolbar
   * @return {boolean} Resultado da verificação
   */
  showToolbar(): boolean {
    return !!(this.campaign) && this.isCampaignOwner();
  }
}
