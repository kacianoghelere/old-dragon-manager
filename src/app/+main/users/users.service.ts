import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Md5 } from 'ts-md5/dist/md5';

import {
  AuthenticationService
} from '../../authentication/authentication.service';
import { MainService } from '../main.service';
import { User } from '../../shared/user';

@Injectable()
export class UsersService extends MainService {

  constructor(auth: AuthenticationService, http: Http) {
    super(auth, http);
  }

  avatarHash(email: string): string | Int32Array {
    if (!email) {
      return '';
    }
    let emailMd5 = Md5.hashStr(email);
    let hash = `https://www.gravatar.com/avatar/${emailMd5}?s=512`;
    return hash;
  }

  create(params: User): Observable<any> {
    let role = params['role'];
    params['role_id'] = role['id'];
    return super._create("users")({user: params});
  }

  destroy(id: number): Observable<any> {
    return super._destroy("users")(id);
  }

  find(id: number): Observable<any> {
    return super._find("users")(id);
  }

  list(): Observable<any> {
    return super._list("users")();
  }

  update(id: number, params: User): Observable<any> {
    let role = params.role;
    params.role_id = role.id;
    console.log(params);
    return super._update("users")(id, {user: params});
  }

}
