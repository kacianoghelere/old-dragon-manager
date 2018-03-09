import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { EntityService } from '../../../shared/services/entity.service';
import { CharacterRace } from '../../../shared/models';

@Injectable()
export class RacesService extends EntityService<CharacterRace> {

  resource: string = "character_races";

  constructor(auth: AuthenticationService, http: Http) {
    super(auth, http);
  }

  find(id: number): Observable<CharacterRace> {
    return super._find(this.resource)(id);
  }

  list(): Observable<CharacterRace[]> {
    return super._list(this.resource)();
  }

}
