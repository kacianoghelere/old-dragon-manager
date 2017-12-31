import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { EntityService } from '../../../../../shared/services/entity.service';
import { PageCategory } from '../../../../../shared/models';

@Injectable()
export class PageCategoriesService extends EntityService<PageCategory> {

  resource: string = 'page_categories';

  constructor(
    authService: AuthenticationService,
    http: Http
  ) {
    super(authService, http);
  }

  /**
   * [find description]
   * @param  {number}                   id [description]
   * @return {Observable<PageCategory>}    [description]
   */
  find(id: number): Observable<PageCategory> {
    return super._find(this.resource)(id);
  }

  /**
   * [list description]
   * @return {Observable<PageCategory[]>} [description]
   */
  list(): Observable<PageCategory[]> {
    return super._list(this.resource)();
  }

}
