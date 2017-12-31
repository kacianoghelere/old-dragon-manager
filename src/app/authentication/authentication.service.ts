import { Observable } from 'rxjs/Observable';

import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import { ApiService } from '../shared/services/api.service';
import { Authentication, User } from '../shared/models';

@Injectable()
export class AuthenticationService {

  authentication: EventEmitter<boolean>;
  currentUser: User;
  fakeAuth: boolean = false;
  token: string;
  private headers: Headers;
  private url: string = 'http://127.0.0.1:3000';
  private storageKey: string = 'authentication';

  //
  // Functions
  // ===========================================================================

  constructor(
    private http: Http,
    private router: Router,
    private apiService: ApiService
  ) {
    this.authentication = new EventEmitter();
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    if (this.storageAuthentication) {
      this.currentUser = this.storageAuthentication.user;
      this.token = this.storageAuthentication.token;
    }
  }

  /**
   * Retorna status de autenticação
   * @return {Boolean} Está autenticado?
   */
  get authenticated(): boolean {
    let storageAuthentication = this.storageAuthentication;
    if (!storageAuthentication) return false;
    return !!(storageAuthentication.token);
  }

  /**
   * Retorna headers autenticados para utilização em HTTP requests para a API
   * @return {Headers} Http headers, includes the JWT
   */
  get authenticationHeaders(): Headers {
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
   * Verifica se os dados recebidos são iguais aos do usuário da sessão atual
   * @param  {any}     user Usuário parâmetro
   * @return {boolean}      Resultado da verificação
   */
  isCurrentUser(user: any): boolean {
    return user['id'] == this.currentUser.id;
  }

  /**
   * Sair do sistema
   * @param {boolean} redirect Deve redirecionar para página principal?
   */
  logout(redirect: boolean = false) {
    this.token = '';
    this.currentUser = null;

    if (redirect) {
      this.router.navigate(['/welcome']);
    }

    this.storageAuthentication = null;
    this.authentication.emit(this.authenticated);
  }

  /**
   * Remove convite para campanha do usuário atual a partir do ID do convite
   * @param {number} id ID do convite
   */
  removeInvitation(id: number) {
    let invitation = this.currentUser.invitations.find((invitation) => {
      return invitation.id == id;
    });

    if (invitation) {
      let index = this.currentUser.invitations.indexOf(invitation);
      this.currentUser.invitations.splice(index, 1);
    }

    this.updateAuthenticationUser();
  }

  /**
   * Método de autenticação na API
   * Envia email e semja para a API, afim de que possa receber o JWT
   * @param {User} user User login data
   */
  signin(user: any) {
    let options = {headers: this.headers};
    let jsonUser = JSON.stringify(user);

    this.http.post(`${this.apiService.url}/authentication`, jsonUser, options)
      .map((res) => res.json()).subscribe((response) => {
        this.token = response.auth_token;
        this.currentUser = response.user;
        this.storageAuthentication = {
          user: this.currentUser,
          token: this.token
        };
        this.router.navigate(['/main']);
      }, (error) => {
        this.logout();
      }, () => {
        this.authentication.emit(this.authenticated);
      });
  }

  /**
   * Retorna autenticação do storage
   * @param  {Authentication} authentication Dados de autenticação
   */
  private get storageAuthentication(): Authentication {
    let auth = JSON.parse(localStorage.getItem(this.storageKey));
    // console.log("storageAuthentication", auth);
    return auth;
  }

  /**
   * Salva informações de autenticação no storage
   * @param  {Authentication} authentication Dados de autenticação
   */
  private set storageAuthentication(authentication: Authentication) {
    localStorage.setItem(this.storageKey, JSON.stringify(authentication));
  }

  /**
   * Atualiza dados do usuário atual no storage
   */
  private updateAuthenticationUser(): void {
    let auth: Authentication = this.storageAuthentication;
    auth.user = this.currentUser;
    this.storageAuthentication = auth;
  }
}
