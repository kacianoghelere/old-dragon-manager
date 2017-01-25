import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Md5 } from 'ts-md5/dist/md5';

import {
  AuthenticationService
} from '../../authentication/authentication.service';

@Injectable()
export class UsersService {

  private headers: Headers;
  private url: string = 'http://localhost:3000/api/v1';

  constructor(
    private authService: AuthenticationService,
    private http: Http
  ) {
    this.headers = this.authService.authHeaders;
  }

  avatarHash(email: string): string | Int32Array {
    if (!email) {
      return '';
    }
    let emailMd5 = Md5.hashStr(email);
    let hash = `https://www.gravatar.com/avatar/${emailMd5}`;
    return hash;
  }

  list(): Observable<any> {
    let options = { headers: this.headers };
    return this.http.get(`${this.url}/users`, options)
      .map((response) => { return response.json() });
  }

  find(id): Observable<any> {
    let options = { headers: this.headers };
    return this.http.get(`${this.url}/users/${id}`, options)
      .map((response) => { return response.json() });
  }
}
