import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { EntityService } from '../../../shared/services/entity.service';
import { Alignment } from '../../../shared/entities/alignment';

@Injectable()
export class AlignmentsService extends EntityService<Alignment> {

  constructor(auth: AuthenticationService, http: Http) {
    super(auth, http);
  }

  /**
   * [find description]
   * @param  {number}          id [description]
   * @return {Observable<Alignment>}    [description]
   */
  find(id: number): Observable<Alignment> {
    return super._find("alignments")(id);
  }

  /**
   * [list description]
   * @return {Observable<Alignment>} [description]
   */
  list(): Observable<Alignment[]> {
    return super._list("alignments")();
  }
}
