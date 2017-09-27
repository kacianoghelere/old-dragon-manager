import { Observable } from 'rxjs/Observable';

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
  }

  /**
   * [find description]
   * @param  {number}          id [description]
   * @return {Observable<any>}    [description]
   */
  find(id: number): Observable<any> {
    return super._find("characters")(id);
  }

  /**
   * [list description]
   * @return {Observable<any>} [description]
   */
  list(): Observable<any> {
    return super._list("characters")();
  }
}
