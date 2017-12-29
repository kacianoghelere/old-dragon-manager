import { Injectable, EventEmitter } from '@angular/core';

import { TrailItem } from '../entities/trail-item';

@Injectable()
export class TrailService {

  log: boolean = false;
  trail: TrailItem[];
  trailUpdate: EventEmitter<TrailItem[]>;

  constructor() {
    this.trail = [];
    this.trailUpdate = new EventEmitter();
    let date = new Date();

    if (this.log) {
      console.log("Trail initialized", date.toString(), date.getMilliseconds());
    }
  }

  /**
   * Adiciona novo elemento na trila
   * @param  {TrailItem} item Novo elemento da trilha
   */
  add(item: TrailItem) {;
    if (this.log) {
      console.log("ADD ", item, " TO THE TRAIL");
    }

    this.trail.push(item);
    this.emitUpdate();
  }

  /**
   * Remove elemento da trilha
   * @param  {TrailItem} item Elemento a ser removido
   * @return {boolean}        Resultado da remoção
   */
  remove(item: TrailItem): boolean {
    let index = this.trail.indexOf(item);

    if (index >= 0) {
      if (this.log) {
          console.log("REMOVED ", item, " FROM THE TRAIL");
      }

      this.trail.splice(index, 1);
      this.emitUpdate();
      return true;
    }

    return false;
  }

  private emitUpdate() {
    this.trailUpdate.emit(this.trail);

    if (this.log) {
      console.log("TRAIL UPDATED", JSON.stringify(this.trail));
    };
  }
}
