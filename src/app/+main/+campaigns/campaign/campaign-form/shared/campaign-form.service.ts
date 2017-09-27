import { Injectable, EventEmitter } from '@angular/core';

import { Campaign } from '../../../../../shared/entities/campaign';
import { AuthenticationService } from '../../../../../authentication/authentication.service';

@Injectable()
/**
 * Service de controle de formulário de campanhas
 */
export class CampaignFormService {

  campaign: Campaign;
  editingEmitter: EventEmitter<{editing: Boolean}>;

  constructor(private authService: AuthenticationService) {
    this.editingEmitter = new EventEmitter();
  }

  /**
   * Propaga notificação de edição
   * @param  {{editing: Boolean}} status Objeto de status a ser propagado
   */
  broadcast(status: {editing: Boolean}) {
    this.editingEmitter.emit(status);
  }

  /**
   * Verifica se o usuário atual pode editar a campanha por ser o dono ou admin
   * @return {boolean} Resultado da verificação
   */
  canEdit(): boolean {
    return this.authService.currentUser.id === this.campaign.dungeonMaster.id
      || this.authService.isAdminUser();
  }
}
