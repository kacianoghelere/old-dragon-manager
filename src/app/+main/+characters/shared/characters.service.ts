import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { EntityService } from '../../../shared/services/entity.service';
import { Character } from '../../../shared/models';

@Injectable()
export class CharactersService extends EntityService<Character> {

  resource: string = 'characters';

  constructor(
    authenticationService: AuthenticationService,
    http: Http
  ) {
    super(authenticationService, http);
  }

  canActivateOwner(id: number): Observable<boolean> {
    return this.find(id).map((character) => {
      return this.authenticationService.isCurrentUser(character.player);
    });
  }

  create(params: Character): Observable<any> {
    return super._create(this.resource)({character: params});
  }

  find(id: number): Observable<Character> {
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

  list(): Observable<Character[]> {
    return super._list(this.resource)();
  }

  update(id: number, params: Character): Observable<any> {
    return super._update(this.resource)(id, {character: params});
  }
}
