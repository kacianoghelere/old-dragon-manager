import { Component } from '@angular/core';

@Component({
  selector: 'core',
  template: '',
  styleUrls: []
})
export class CoreComponent {

  /**
   * Verifica se uma coleção é válida e não vazia
   * @param  {any[]}   collection Coleção
   * @return {boolean}            Resultado da verificação
   */
  protected emptyCollection(collection: any[]): boolean {
    return !(collection && collection.length);
  }

  /**
   * Verifica se uma coleção é válida e tem dados preenchidos
   * @param  {any[]}  collection Coleção de dados
   * @return {boolean}            Resultado da verificação
   */
  protected hasData(collection: any[]): boolean {
    return !this.emptyCollection(collection);
  }
}
