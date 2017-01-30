import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../authentication/authentication.service';
import { EntityService } from '../shared/services/entity.service';
import { Role } from '../shared/entities/role';

@Injectable()
export class RolesService extends EntityService<Role> {

  constructor(auth: AuthenticationService, http: Http) {
    super(auth, http);
  }

  find(id: any): Observable<any> {
    return super._find("roles")(id);
  }

  list(): Observable<any> {
    return super._list("roles")();
  }

}
