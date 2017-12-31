import { Component, OnInit, Input } from '@angular/core';

import { CharacterClass } from '../../../../../shared/models';

@Component({
  selector: 'class-info',
  templateUrl: './class-info.component.html',
  styleUrls: ['./class-info.component.scss']
})
export class ClassInfoComponent implements OnInit {

  // Public variables
  // ---------------------------------------------------------------------------
  @Input() characterClass: CharacterClass;

  //
  // Functions
  // ===========================================================================

  constructor() { }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
  }

  /**
   * Transforma valor booleano em valores literais
   * @param  {any}    source     Objeto fonte de dados
   * @param  {string} property   Propriedade a ser verificada
   * @param  {string} trueParam  Texto caso seja verdadeiro
   * @param  {string} falseParam Texto caso seja falso
   * @return {string}            Texto resultante da verificação
   */
  boolFormat(
    source: any,
    property: string,
    trueParam: string = 'Sim',
    falseParam: string = 'Não'
  ): string {
    if (!source || !property || !source[property]) return falseParam;
    return source[property] ? trueParam : falseParam;
  }
}
