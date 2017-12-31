import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Md5 } from 'ts-md5/dist/md5';

import { AuthenticationService } from '../authentication/authentication.service';
import { EntityService } from '../shared/services/entity.service';
import { User } from '../shared/models';

@Injectable()
export class UsersService extends EntityService<User> {

  resource: string = "users";

  constructor(authService: AuthenticationService, http: Http) {
    super(authService, http);
  }

  /**
   * Cria o link para o gravatar usando o e=mail do usuário
   * @param  {string} email User email address
   * @return {string}       Link to gravatar
   */
  avatarHash(email: string): string | Int32Array {
    if (!email) {
      return '';
    }
    let emailMd5 = Md5.hashStr(email);
    return `https://www.gravatar.com/avatar/${emailMd5}?s=512`;
  }

  /**
   * Cria novo usuário
   * @param  {User}            params [description]
   * @return {Observable<any>}        [description]
   */
  create(params: User): Observable<any> {
    return super._create(this.resource)({user: params});
  }

  /**
   * Destrói usuário
   * @param  {number}          id ID do usuário
   * @return {Observable<any>}    Retorno do Request
   */
  destroy(id: number): Observable<any> {
    return super._destroy(this.resource)(id);
  }

  /**
   * Busca usuário partir do ID
   * @param  {number}          id ID do usuário
   * @return {Observable<any>}    Retorno do Request
   */
  find(id: number): Observable<any> {
    return super._find(this.resource)(id);
  }

  /**
   * Busca todas as campanhas do usuário
   * @param  {number}          id ID do usuário
   * @return {Observable<any>}    Retorno do Request
   */
  findCampaigns(id: number): Observable<any> {
    return super._custom(this.resource, 'campaigns')(id);
  }

  /**
   * Busca todos os convites de campanha do usuário
   * @param  {number}          id ID do usuário
   * @return {Observable<any>}    Retorno do Request
   */
  findCampaignInvitations(id: number): Observable<any> {
    return super._custom(this.resource, 'campaign_invitations')(id);
  }

  /**
   * Busca todas os personagens do usuário
   * @param  {number}          id ID do usuário
   * @return {Observable<any>}    Retorno do Request
   */
  findCharacters(id: number): Observable<any> {
    return super._custom(this.resource, 'characters')(id);
  }

  /**
   * Busca lista de usuários
   * @return {Observable<any>} Retorno do Request
   */
  list(): Observable<any> {
    return super._list(this.resource)();
  }

  /**
   * Busca lista de usuários aptos para receberes convite de campanha
   * @return {Observable<any>} Retorno do Request
   */
  listInvitable(campaign_id): Observable<any> {
    return super._find("invitable_users")(campaign_id);
  }

  /**
   * Atualiza dados do usuário
   * @param  {number}          id     ID do usuario
   * @param  {User}            params Dados do usuário
   * @return {Observable<any>}        Retorno do Request
   */
  update(id: number, params: User): Observable<any> {
    return super._update(this.resource)(id, {user: params});
  }

}
