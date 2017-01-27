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

  /**
   * API authentication method
   * Sends the user email and password to the API in order to receive de JWT
   * @param {any} user User login data
   */
  authenticate(user) {
    let options = { headers: this.headers };
    this.http.post(`${this.url}/authentication`, JSON.stringify(user), options)
      .map((res) => { return res.json() })
      .subscribe(
        (res) => {
          this.token = res.auth_token;
          this.user = res.user;
          this.authenticated = true;
        },
        (error) => {
          this.token = null;
          this.user = null;
          this.authenticated = false;
        },
        () => {
          this.authentication.emit(this.authenticated);
        }
      );
  }

  /**
   * Returns Authenticated headers for easy http requests to the API
   * @return {Headers} Http headers, includes the JWT
   */
  get authHeaders(): Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }

}
