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
   * @param  {number}              id ID da campanha
   * @return {Observable<boolean>}    Observavel de resultado
   */
  canActivateOwner(id: number): Observable<boolean> {
    return this.find(id).map((character) => {
      return this.authenticationService.isCurrentUser(character.player);
    });
  }

  /**
   * [create description]
   * @param  {Campaign}               params [description]s
   * @return {Observable<Campaign[]>}        [description]
   */
  create(params: Character): Observable<any> {
    return super._create(this.resource)({character: params});
  }

  /**
   * [find description]
   * @param  {number}          id [description]
   * @return {Observable<any>}    [description]
   */
  find(id: number): Observable<any> {
    return super._find(this.resource)(id);
  }

  /**
   * Identifica se o registro deve ser criado ou atualizado e direciona para a
   * função de tratamento correta
   * @param  {any}             params Informações do registro
   * @return {Observable<any>}        Observavel de retorno do request
   */
  handle(params: any): Observable<any> {
    if (params.id) {
      return this.update(params.id, params);
    }
    return this.create(params);
  }

  /**
   * [list description]
   * @return {Observable<Character[]>} [description]
   */
  list(): Observable<Character[]> {
    return super._list(this.resource)();
  }

  /**
   * [update description]
   * @param  {number}          id     [description]
   * @param  {Character}        params [description]
   * @return {Observable<any>}        [description]
   */
  update(id: number, params: Character): Observable<any> {
    return super._update(this.resource)(id, {character: params});
  }
}
