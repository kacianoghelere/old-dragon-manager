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
    let hash = `https://www.gravatar.com/avatar/${emailMd5}?s=512`;
    return hash;
  }

  get options(): any {
    return { headers: this.headers };
  }

  responseToJson(response: any): any {
    return response.json();
  }

  list(): Observable<any> {
    return this.http.get(`${this.url}/users`, this.options)
      .map(this.responseToJson);
  }

  find(id: any): Observable<any> {
    return this.http.get(`${this.url}/users/${id}`, this.options)
      .map(this.responseToJson);
  }

  create(params: any[]): Observable<any> {
    let _params = JSON.stringify(params);
    return this.http.put(`${this.url}/users`, _params, this.options)
      .map(this.responseToJson);
  }

  update(id: any, params: any[]): Observable<any> {
    let _params = JSON.stringify(params);
    return this.http.put(`${this.url}/users/${id}`, _params, this.options)
      .map(this.responseToJson);
  }

  destroy(id: any): Observable<any> {
    return this.http.delete(`${this.url}/users/${id}`, this.options)
      .map(this.responseToJson);
  }
}
