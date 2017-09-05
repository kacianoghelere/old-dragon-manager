import { OnInit, OnDestroy } from '@angular/core';

import { TrailItem } from './trail-item';
import { TrailService }  from "../services/trail.service";

/**
 * Super classe de construção de trilhas para componentes
 * @param {TrailService} trailService Service de gerenciamento de trilha
 * @param {TrailItem}    trailItem    Elemento da trilha
 */
export class TrailBuilder implements OnInit, OnDestroy {

  /**
   * Construtor de super classe
   * @param {TrailService} trailService Service de gerenciamento de trilha
   * @param {TrailItem}    trailItem    Elemento da trilha
   */
  constructor(
    protected trailService: TrailService,
    protected trailItem: TrailItem
  ) { }

  /**
   * Lifecycle hook de destruíção de componente.
   * Remove elemento da trilha da lista
   */
  ngOnDestroy() {
    this.trailService.remove(this.trailItem);
  }

  /**
   * Lifecycle hook de criação de componente.
   * Adiciona elemento da trilha na lista
   */
  ngOnInit() {
    this.trailService.add(this.trailItem);
  }
}
