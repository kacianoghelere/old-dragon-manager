import { Component, OnInit } from '@angular/core';

import { Link } from "../../shared/entities/link";

@Component({
  selector: 'main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  links: Link[];
  coverImage: string = 'https://2.bp.blogspot.com/-3sx0Aj6HPP4/WNFTPgoHxZI/AAAAAAAACII/QyWSx4rYm2IF4JxYx5yT_kWvPpFKVGetQCLcB/s1600/od-dm-kit.jpg';

  constructor() {
    this.links = [
      {
        title: 'Campanhas',
        description: 'Gerencie suas aventuras, crie diários, monitore os '
          + ' protagonistas e muito mais!',
        picture: 'http://critforbrains.com/wp-content/uploads/2016/06/IMG_4066.jpg',
        route: 'campaigns'
      },
      {
        title: 'Modificadores',
        description: 'Consulta rápida de modificadores de atributos.',
        picture: 'http://3.bp.blogspot.com/-9AmZogWe9MA/UCkvMqvOjpI/AAAAAAAAA0w/EpyAQ-L8IjY/s1600/rolling_stats.jpg',
        route: 'modifiers'
      },
      {
        title: 'Personagens',
        description: 'Crie seu próprio personagem, a criatividade é o único '
          + ' limite aqui!',
        picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--R0QEn5Y_--/c_scale,f_auto,fl_progressive,q_80,w_800/18loz956fez9ujpg.jpg',
        route: 'characters'
      },
      {
        title: 'Usuários',
        description: 'Adicione amigos, encontre mestres e jogadores.',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Role_playing_gamers.jpg/330px-Role_playing_gamers.jpg',
        route: '/users'
      }
    ];
  }

  ngOnInit() {
  }

}
