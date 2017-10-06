import { Subscription } from 'rxjs/Subscription';

import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { Campaign } from '../../../../shared/entities/campaign';
import { CampaignNote } from '../../../../shared/entities/campaign-note';
import { CampaignsService } from '../../shared/campaigns.service';
import { CampaignNotesService } from '../../shared/campaign-notes.service';

@Component({
  selector: 'campaign-notes',
  templateUrl: './campaign-notes.component.html',
  styleUrls: ['./campaign-notes.component.scss']
})
export class CampaignNotesComponent implements OnInit {

  campaign: Campaign;
  _notes: CampaignNote[];
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private notesService: CampaignNotesService
  ) { }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params) => {
      let id = params['campaign_id'];
      console.log(params);
      if (id) {
        this.subscription = this.notesService.listChildren(id)
          .subscribe((notes) => this._notes = notes);
      }
    });
  }

  /**
   * Retorna as notas aplicando filtro de anotações do mestre de jogo
   * @return {CampaignNote[]} Notas de Campanha
   */
  get filteredNotes(): CampaignNote[] {
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

  get notes(): CampaignNote[] {
    return this._notes || [];
  }
}
