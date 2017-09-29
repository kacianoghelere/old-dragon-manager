import { Component, OnInit } from '@angular/core';

import { Link } from "../../../shared/entities/link";

@Component({
  selector: 'characters-home',
  templateUrl: './characters-home.component.html',
  styleUrls: ['./characters-home.component.scss']
})
export class CharactersHomeComponent implements OnInit {

  links: Link[];

  constructor() {
    this.links = [
      {
        title: 'Raças',
        picture: '/assets/races_card.jpg',
        description: 'Criação e consulta de dados sobre as raças jogáveis.',
        route: 'races'
      },
      {
        title: 'Classes',
        picture: 'assets/classes_card.jpg',
        description: 'Informações essênciais sobre classes de personagens!',
        route: 'classes'
      },
      {
        title: 'Ficha',
        picture: '/assets/sheet_card.jpg',
        description: 'Monte aqui seu personagem.',
        route: 'sheet'
      }
    ]
  }

  ngOnInit() {
  }

}
