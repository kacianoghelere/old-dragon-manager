import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../authentication/authentication.service';
import { EntityService } from '../../shared/services/entity.service';
import { Character } from '../../shared/entities/character';

@Injectable()
export class CharactersService extends EntityService<Character> {

  characters: Character[];

  constructor(
    authService: AuthenticationService,
    http: Http
  ) {
    super(authService, http);
    this.characters = [
      {
        id: 1,
        name: 'Torhmmund, o Ruivo',
        player: 'Zézinho',
        title: 'Leader of the Wildlings',
        level: 5,
        race: {
          id: 1,
          name: 'Humano',
          user: this.authService.currentUser
        },
        class: {
          id: 1,
          name: 'Homem de Armas',
          user: this.authService.currentUser
        },
        specialization: {
          id: 1,
          name: 'Guerreiro',
          user: this.authService.currentUser
        },
        alignment: {
          id: 3,
          name: 'Caótico',
          className: 'chaotic'
        },
        picture: 'http://lorempixel.com/400/400/abstract/',
        description: '"I\'m gonna make babies with her, they will be strong as bears!"',
        attributes: {
          strength: 15,
          dexterity: 13,
          constitution: 12,
          intelligence: 11,
          wisdom: 9,
          charisma: 12
        }
      },
      {
        id: 2,
        name: 'Jon Snow',
        player: 'Guga',
        title: 'Lord Commander of the Night\'s Watch',
        level: 1,
        race: {
          id: 1,
          name: 'Humano',
          user: this.authService.currentUser
        },
        class: {
          id: 1,
          name: 'Homem de Armas',
          user: this.authService.currentUser
        },
        specialization: {
          id: 1,
          name: 'Guerreiro',
          user: this.authService.currentUser
        },
        alignment: {
          id: 2,
          name: 'Neutro',
          className: 'neutral'
        },
        picture: 'http://tzi.github.io/chewing-grid.css/image/4.jpg',
        description: 'Knows nothing.',
        attributes: {
          strength: 10,
          dexterity: 12,
          constitution: 12,
          intelligence: 10,
          wisdom: 8,
          charisma: 9
        }
      },
      {
        id: 3,
        name: 'Jaime Lannister',
        player: 'Mauro',
        title: 'Lord Commander of the Kingsguard',
        level: 8,
        race: {
          id: 1,
          name: 'Humano',
          user: this.authService.currentUser
        },
        class: {
          id: 1,
          name: 'Homem de Armas',
          user: this.authService.currentUser
        },
        specialization: {
          id: 1,
          name: 'Guerreiro',
          user: this.authService.currentUser
        },
        alignment: {
          id: 1,
          name: 'Orderio',
          className: 'lawfull'
        },
        picture: 'http://tzi.github.io/chewing-grid.css/image/6.jpg',
        description: 'Really loves his sister. Really.',
        attributes: {
          strength: 11,
          dexterity: 14,
          constitution: 12,
          intelligence: 12,
          wisdom: 11,
          charisma: 13
        }
      },
      {
        id: 4,
        name: 'Al-zahed',
        player: 'Godofredo',
        title: 'Lord Commander of the Grigaida',
        level: 8,
        race: {
          id: 1,
          name: 'Humano',
          user: this.authService.currentUser
        },
        class: {
          id: 1,
          name: 'Homem de Armas',
          user: this.authService.currentUser
        },
        specialization: {
          id: 1,
          name: 'Guerreiro',
          user: this.authService.currentUser
        },
        alignment: {
          id: 1,
          name: 'Orderio',
          className: 'lawfull'
        },
        picture: 'http://tzi.github.io/chewing-grid.css/image/6.jpg',
        description: 'Really loves his sister. Really.',
        attributes: {
          strength: 11,
          dexterity: 14,
          constitution: 12,
          intelligence: 12,
          wisdom: 11,
          charisma: 13
        }
      }
    ];
  }

  /**
   * [find description]
   * @param  {number}          id [description]
   * @return {Observable<any>}    [description]
   */
  find(id: number): Character {
    // return super._find("characters")(id);
    return this.characters.find((character) => character.id == id);
  }

  /**
   * [list description]
   * @return {Observable<any>} [description]
   */
  list(): Character[] {
    // return super._list("characters")();
    return this.characters;
  }


}
