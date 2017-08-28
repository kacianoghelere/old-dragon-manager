import { Component, OnInit } from '@angular/core';

import { MainLink } from "../shared/main-link";

@Component({
  selector: 'main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnInit {

  links: MainLink[];

  constructor() {
    this.links = [
      {
        title: 'Campanhas',
        description: 'Gerencie suas aventuras, crie diários, monitore a'
          + ' evolução dos protagonistas e muito mais!',
        route: 'campaigns'
      },
      {
        title: 'Modificadores',
        description: 'Consulta rápida de modificadores de atributos.',
        route: 'modifiers'
      },
      {
        title: 'Personagens',
        description: 'Crie seu próprio protagonista, npc ou vilão, a'
          + ' criatividade é o único limite aqui!',
        route: 'characters'
      }
    ]
  }

  ngOnInit() {
  }

}
