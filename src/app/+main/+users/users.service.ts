import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

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
