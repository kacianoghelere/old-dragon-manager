import { Component, OnInit, Input } from '@angular/core';

import { CharacterClass } from '../../../../../shared/models';

@Component({
  selector: 'class-thief-talents',
  templateUrl: './class-thief-talents.component.html',
  styleUrls: ['./class-thief-talents.component.scss']
})
export class ClassThiefTalentsComponent implements OnInit {

  // Public variables
  // ---------------------------------------------------------------------------
  @Input() characterClass: CharacterClass;
  categories: any[];

  //
  // Functions
  // ===========================================================================

  constructor() { }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
    this.categories = [
      {
        label: "Arrombamento",
        description: "Jogada de INT. Tempo necessário: 10 minutos. "
          + "Os demais requisitos da jogada se aplicam normalmente."
      },
      {
        label: "Armadilhas",
        description: "Jogada de INT. Mesmo sendo bem sucedido, o personagem "
          + "tem 50% de chance de estar equivocado."
      },
      {
        label: "Escalar",
        description: "Jogada de FOR. Cada jogada compreende que o personagem "
          + "escalou 2 metros. Em caso de falha, o personagem cairá, tomando "
          + "1d6 pontos de dano para cada 3 metros, mesmo que seja na "
          + "primeira jogada."
      },
      {
        label: "Furtividade",
        description: "Jogada de DES. O personagem se move a 1/4 da velocidade "
          + "normal. Não dá direito ao ataque furtivo."
      },
      {
        label: "Punga",
        description: "Jogada de DES. Em caso de falha, o personagem não só é "
          + "visto por todos ao seu redor, mas também pela vítima."
      },
      {
        label: "Percepção",
        description: "Jogada de SAB. Mesmo sendo bem sucedido, o personagem "
          + "tem 50% de chance de estar equivocado."
      },
      {
        label: "Ataque furtivo",
        description: "Esta é uma habilidade exclusiva de ladrão."
      }
    ]
  }

  emptyCollection(collection: any[]): boolean {
    if (collection && collection.length) return false;
    return true;
  }

}
