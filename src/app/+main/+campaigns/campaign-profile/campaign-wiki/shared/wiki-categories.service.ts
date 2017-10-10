import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { EntityService } from '../../../../../shared/services/entity.service';
import { WikiCategory } from '../../../../../shared/entities/wiki-category';

@Injectable()
export class WikiCategoriesService extends EntityService<WikiCategory> {

  resource: string = 'wiki_categories';

  constructor(
    authService: AuthenticationService,
    http: Http
  ) {
    super(authService, http);
  }

  /**
   * [find description]
   * @param  {number}                   id [description]
   * @return {Observable<WikiCategory>}    [description]
   */
  find(id: number): Observable<WikiCategory> {
    return super._find(this.resource)(id);
  }

  /**
   * [list description]
   * @return {Observable<WikiCategory[]>} [description]
   */
  list(): Observable<WikiCategory[]> {
    return super._list(this.resource)();
  }

}
