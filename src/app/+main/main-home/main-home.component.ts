import { Component, OnInit } from '@angular/core';

import { Link } from "../shared/link";

@Component({
  selector: 'main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  links: Link[];

  constructor() {
    this.links = [
      {
        title: 'Campanhas',
        description: 'Gerencie suas aventuras, crie diários, monitore a'
          + ' evolução dos protagonistas e muito mais!',
        picture: 'http://critforbrains.com/wp-content/uploads/2016/06/IMG_4066.jpg',
        route: 'campaigns'
      },
      {
        title: 'Modificadores',
        description: 'Consulta rápida de modificadores de atributos.',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8W9ssrtpehHVqZIZ1EVypzoUZnHfJvEaqEzwEs1k80ifwZbc',
        route: 'modifiers'
      },
      {
        title: 'Personagens',
        description: 'Crie seu próprio protagonista, npc ou vilão, a'
          + ' criatividade é o único limite aqui!',
        picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--R0QEn5Y_--/c_scale,f_auto,fl_progressive,q_80,w_800/18loz956fez9ujpg.jpg',
        route: 'characters'
      }
    ]
  }

  ngOnInit() {
  }

}
