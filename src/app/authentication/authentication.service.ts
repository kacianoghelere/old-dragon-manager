import { Observable } from 'rxjs/Observable';

import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import { User } from '../shared/entities/user';

@Injectable()
export class AuthenticationService {

  // Public variables
  // ---------------------------------------------------------------------------
  fakeAuth: boolean = false;
  authentication: EventEmitter<boolean>;
  // currentUser: any = {
  //   admin: true,
  //   email: "themohawkeagle@gmail.com",
  //   id: 1,
  //   name: "Administrador"
  // };
  // token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.oR-IHkxvncZCvEJ9HXZ67I5rH2-hROijD4WF73U08Nk';
  currentUser: any;
  token: string;

  // Private & Protected variables
  // ---------------------------------------------------------------------------
  private headers: Headers;
  private url: string = 'http://127.0.0.1:3000';

  //
  // Functions
  // ===========================================================================

  constructor(
    private http: Http,
    private router: Router
  ) {
    this.authentication = new EventEmitter();
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    if (this.fakeAuth) {
      this.currentUser = {
        admin: true,
        email: "themohawkeagle@gmail.com",
        id: 1,
        name: "Administrador"
      };
      this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.oR-IHkxvncZCvEJ9HXZ67I5rH2-hROijD4WF73U08Nk';
    }
  }

  //
  // Getters and Setters
  // ---------------------------------------------------------------------------

  /**
   * Returns the authentication status
   * @return {Boolean} Is authenticated?
   */
  get authenticated(): boolean {
    return !!(this.token);
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

  get debugInfo(): any {
    return {
      authenticated: this.authenticated,
      currentUser: this.currentUser,
      token: this.token
    };
  }

  //
  // Common functions
  // ---------------------------------------------------------------------------

  /**
   * Verifica se o usuário parametro tem privilégios de administração
   * @param  {User}    user Usuário parametro
   * @return {boolean}      É administrador?
   */
  isAdmin(user: User): boolean {
    if (!user.role) return false;
    return user.role.admin;
  }

  /**
   * Verifica se o usuário atual tem privilégios de administração
   * @return {boolean} É uma sessão de administrador?
   */
  isAdminUser(): boolean {
    return this.isAdmin(this.currentUser);
  }

  /**
   * Signout method
   * @param {boolean} redirect Redirect router to the root page
   */
  logout(redirect: boolean = false) {
    this.token = '';
    this.currentUser = null;
    if (redirect) {
      this.router.navigate(['/welcome']);
    }
    this.authentication.emit(this.authenticated);
  }

  /**
   * API authentication method
   * Sends the user email and password to the API in order to receive de JWT
   * @param {User} user User login data
   */
  signin(user: any) {
    let options = { headers: this.headers };
    this.http.post(`${this.url}/authentication`, JSON.stringify(user), options)
      .map((res) => { return res.json() })
      .subscribe((response) => {
        this.token = response.auth_token;
        this.currentUser = response.user;
        this.router.navigate(['/main']);
      },
      (error) => {
        this.logout();
      },
      () => {
        this.authentication.emit(this.authenticated);
      });
  }

}
