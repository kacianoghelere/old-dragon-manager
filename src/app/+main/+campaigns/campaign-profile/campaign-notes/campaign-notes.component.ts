import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { Campaign } from '../../../../shared/entities/campaign';
import { CampaignNote } from '../../../../shared/entities/campaign-note';
import { CampaignsService } from '../../shared/campaigns.service';

@Component({
  selector: 'campaign-notes',
  templateUrl: './campaign-notes.component.html',
  styleUrls: ['./campaign-notes.component.scss']
})
export class CampaignNotesComponent implements OnInit {

  campaign: Campaign;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService
  ) { }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params) => {
      let id = params['campaign_id'];
      console.log(params);
      if (id) {
        this.subscription = this.campaignsService.find(id)
          .subscribe((res) => this.campaign = res);
      }
    });
  }

  /**
   * Retorna as notas aplicando filtro de anotações do mestre de jogo
   * @return {CampaignNote[]} Notas de Campanha
   */
  get filteredNotes(): CampaignNote[] {
    if (this.isCampaignOwner()) return this.notes;
    return this.notes.filter((note) => !note.dm_only);
  }

  /**
   * Verifica se o usuário atual é o mestre de jogo da campanha
   * @return {boolean} Resultado da verificação
   */
  isCampaignOwner(): boolean {
    return this.authService.isCurrentUser(this.campaign.dungeonMaster);
  }

  get notes(): CampaignNote[] {
    return this.campaign.notes || [];
  }
}
