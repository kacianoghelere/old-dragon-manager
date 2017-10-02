import { Component } from '@angular/core';

@Component({
  selector: 'core',
  template: '',
  styleUrls: []
})
export class CoreComponent {

  protected activeTab: number = 0;

  /**
   * Verifica se uma coleção é válida e não vazia
   * @param  {any[]}   collection Coleção
   * @return {boolean}            Resultado da verificação
   */
  protected emptyCollection(collection: any[]): boolean {
    return !(collection && collection.length);
  }

  protected getModifier(attribute: number): string {
    let modifier = (attribute - 10) / 2;
    let signal = modifier !== 0 ? (modifier > 0 ? '+' : '-') : '';
    let absModifier = Math.abs(modifier).toFixed(0);
    return `${signal}${absModifier}`;
  }

  /**
   * Verifica se uma coleção é válida e tem dados preenchidos
   * @param  {any[]}  collection Coleção de dados
   * @return {boolean}            Resultado da verificação
   */
  protected hasData(collection: any[]): boolean {
    return !this.emptyCollection(collection);
  }

  /**
   * [isActiveClass description]
   * @param  {number} index [description]
   * @return {[type]}       [description]
   */
  protected isActiveClass(index: number): {active: boolean} {
    return {active: this.isActiveTab(index)};
  }

  /**
   * [isActiveTab description]
   * @param  {number}  index [description]
   * @return {boolean}       [description]
   */
  protected isActiveTab(index: number): boolean {
    return index === this.activeTab;
  }

  /**
   * [setActiveTab description]
   * @param  {number} index [description]
   * @return {[type]}       [description]
   */
  protected setActiveTab(index: number) {
    this.activeTab = index;
  }
}
