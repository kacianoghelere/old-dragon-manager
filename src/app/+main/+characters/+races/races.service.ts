import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { EntityService } from '../../../shared/services/entity.service';
import { CharacterRace } from '../../../shared/entities/character-race';

@Injectable()
export class RacesService extends EntityService<CharacterRace> {

  constructor(auth: AuthenticationService, http: Http) {
    super(auth, http);
  }

  /**
   * [find description]
   * @param  {number}          id [description]
   * @return {Observable<any>}    [description]
   */
  find(id: number): Observable<any> {
    return super._find("character_races")(id);
  }

  /**
   * [list description]
   * @return {Observable<any>} [description]
   */
  list(): Observable<any> {
    return super._list("character_races")();
  }

}
