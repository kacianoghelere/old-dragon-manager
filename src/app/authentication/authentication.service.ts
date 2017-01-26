import { Observable } from 'rxjs/Observable';

import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  token: string;
  authenticated: boolean = false;
  authentication: EventEmitter<boolean>;
  user: any;
  private headers: Headers;
  private url: string = 'http://localhost:3000';

  constructor(
    private http: Http,
    private router: Router
  ) {
    this.authentication = new EventEmitter();
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  // email=a@a.com&password=changeme
  authenticate(user) {
    let options = { headers: this.headers };
    let response = this.http
      .post(`${this.url}/authentication`, JSON.stringify(user), options)
      .map((res) => { return res.json() });
    response.subscribe((res) => {
        this.token = res.auth_token;
        this.user = res.user;
        this.authenticated = true;
        this.authentication.emit(this.authenticated);
      }, (error) => {
        this.token = null;
        this.user = null;
        this.authenticated = false;
        this.authentication.emit(this.authenticated);
      });
    return response;
  }

  /* Cabeçalho de autorização, inclui token de acesso */
  get authHeaders(): Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }

}
