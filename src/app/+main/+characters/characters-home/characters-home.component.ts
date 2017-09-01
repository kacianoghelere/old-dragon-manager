import { Component, OnInit } from '@angular/core';

import { Link } from "../../shared/link";

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
        route: 'races'
      },
      {
        title: 'Classes',
        picture: 'http://cdn.playbuzz.com/cdn/83c79868-c191-4800-8c16-f3235d2a181a/8d3a2042-df29-4510-860d-17fe492303af_560_420.jpg',
        route: 'classes'
      },
      {
        title: 'Ficha',
        picture: 'https://rpgrunkleplaysgames.files.wordpress.com/2016/02/21b8d-sheet.jpg?w=798',
        route: 'sheet'
      }
    ]
  }

  ngOnInit() {
  }

}
