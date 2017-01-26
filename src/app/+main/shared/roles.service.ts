import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {
  AuthenticationService
} from '../../authentication/authentication.service';
import { MainService } from '../main.service';

@Injectable()
export class RolesService extends MainService {

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
