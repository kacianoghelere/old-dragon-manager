import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';

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

  /**
   * Retorna objeto de classe de validação de um campo de formulário
   * @param  {AbstractControl} control Controle do formulário
   * @param  {string}         field    Nome do controle
   * @return {any}                     Objeto de Classes de validação
   */
  getErrorClass(
    control: AbstractControl,
    field: string
  ): any {
    return {'is-invalid': this.hasError(control)};
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
   * Verifica se um Control de Form foi modificado e está com erro
   * @param  {AbstractControl} field Campo do formulário
   * @return {boolean}               Resultado da verificação
   */
  hasError(field: AbstractControl): boolean {
    return (field.touched && !field.pristine && !field.valid);
  }

  /**
   * [isActiveClass description]
   * @param  {any} index [description]
   * @return {[type]}       [description]
   */
  protected isActiveClass(index: any): {active: boolean} {
    return {active: this.isActiveTab(index)};
  }

  /**
   * [isActiveTab description]
   * @param  {any}  index [description]
   * @return {boolean}       [description]
   */
  protected isActiveTab(index: any): boolean {
    return index === this.activeTab;
  }

  /**
   * [setActiveTab description]
   * @param  {any} index [description]
   * @return {[type]}       [description]
   */
  protected setActiveTab(index: any) {
    this.activeTab = index;
  }
}
