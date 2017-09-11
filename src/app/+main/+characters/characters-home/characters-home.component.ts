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
        picture: 'https://dmleviathan.files.wordpress.com/2017/02/10-races.jpg?w=541&h=371',
        description: 'Criação e consulta de dados sobre as raças jogáveis.',
        route: 'races'
      },
      {
        title: 'Classes',
        picture: 'https://i.ytimg.com/vi/MUC53AYiEjQ/maxresdefault.jpg',
        description: 'Informações essênciais sobre classes de personagens!',
        route: 'classes'
      },
      {
        title: 'Ficha',
        picture: 'https://rpgrunkleplaysgames.files.wordpress.com/2016/02/21b8d-sheet.jpg?w=798',
        description: 'Monte aqui seu personagem.',
        route: 'sheet'
      }
    ]
  }

  ngOnInit() {
  }

}
