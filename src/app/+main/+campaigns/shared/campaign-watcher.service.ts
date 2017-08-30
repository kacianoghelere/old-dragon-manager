import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CampaignWatcherService {


  editingEmitter: EventEmitter<{editing: Boolean}>;

  constructor() {
    this.editingEmitter = new EventEmitter();
  }

  /**
   * Propaga notificação de edição
   * @param  {{editing: Boolean}} status Objeto de status a ser propagado
   */
  broadcast(status: {editing: Boolean}) {
    this.editingEmitter.emit(status);
  }
}
