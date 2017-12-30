import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { EntityService } from '../../../shared/services/entity.service';
import { CharacterClass } from '../../../shared/entities/character-class';

@Injectable()
export class ClassesService extends EntityService<CharacterClass> {

  constructor(auth: AuthenticationService, http: Http) {
    super(auth, http);
  }

  /**
   * [find description]
   * @param  {number}                     id [description]
   * @return {Observable<CharacterClass>}    [description]
   */
  find(id: number): Observable<CharacterClass> {
    return super._find("character_classes")(id);
  }

  /**
   * [list description]
   * @return {Observable<CharacterClass>} [description]
   */
  list(): Observable<CharacterClass[]> {
    return super._list("character_classes")();
  }

  /**
   * [find description]
   * @param  {number}                     id [description]
   * @return {Observable<CharacterClass>}    [description]
   */
  showcase(id: any): Observable<CharacterClass> {
    return super._custom("character_classes", "showcase")(id);
  }
}
