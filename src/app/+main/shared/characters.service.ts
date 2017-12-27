import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../authentication/authentication.service';
import { EntityService } from '../../shared/services/entity.service';
import { Character } from '../../shared/entities/character';

@Injectable()
export class CharactersService extends EntityService<Character> {

  characters: Character[];
  resource: string = 'characters';

  constructor(
    authenticationService: AuthenticationService,
    http: Http
  ) {
    super(authenticationService, http);
  }

  belongToCurrentUser(character: Character): boolean {
    return this.authenticationService.isCurrentUser(character.player);
  }

  /**
   * Verifica se o usuário atual é o dono da campanha para ativar rotas
   */
  canActivateOwner(id: number): Observable<boolean> {
    return this.find(id).map((character) => {
      return this.authenticationService.isCurrentUser(character.player);
    });
  }

  /**
   * Creates a new character
   */
  create(params: Character): Observable<any> {
    return super._create(this.resource)({character: params});
  }

  /**
   * Queries character data
   */
  find(id: any): Observable<Character> {
    return super._find(this.resource)(id);
  }

  /**
   * [list description]
   */
  list(): Observable<Character[]> {
    return super._list(this.resource)();
  }

  /**
   * Identifica se o registro deve ser criado ou atualizado e direciona para a
   * função de tratamento correta
   */
  save(params: any): Observable<any> | Observable<Character> {
    if (params['id']) {
      return this.update(params['id'], params);
    }

    return this.create(params);
  }

  /**
   * [update description]
   */
  update(id: number, params: Character): Observable<any> {
    return super._update(this.resource)(id, {character: params});
  }
}
