import { Component, OnInit, Input } from '@angular/core';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { Campaign } from '../../../../shared/entities/campaign';
import { CampaignNote } from '../../../../shared/entities/campaign-note';

@Component({
  selector: 'campaign-notes',
  templateUrl: './campaign-notes.component.html',
  styleUrls: ['./campaign-notes.component.scss']
})
export class CampaignNotesComponent implements OnInit {

  @Input('campaign') campaign: Campaign;
  @Input('notes') notes: CampaignNote[];

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
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
}
