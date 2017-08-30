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
        picture: 'http://lorempixel.com/400/400/abstract/',
        description: this.getLorem(),
        attributes: {
          strength: 10,
          dexterity: 13,
          constitution: 12,
          intelligence: 10,
          wisdom: 8,
          charisma: 9
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
