import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { EntityService } from '../../../shared/services/entity.service';
import { Campaign } from '../../../shared/entities/campaign';
import { CampaignPage } from '../../../shared/entities/campaign-page';
import { CharactersService } from '../../shared/characters.service';

@Injectable()
export class CampaignsService extends EntityService<Campaign> {

  resource: string = 'campaigns';

  constructor(
    authenticationService: AuthenticationService,
    http: Http,
    private charactersService: CharactersService
  ) {
    super(authenticationService, http);
  }

  /**
   * Verifica se o usuário atual é o dono da campanha para ativar rotas
   * @param  {number}              id ID da campanha
   * @return {Observable<boolean>}    Observavel de resultado
   */
  canActivateOwner(id: number): Observable<boolean> {
    return this.find(id).map((campaign) => {
      return this.authenticationService.isCurrentUser(campaign.dungeonMaster);
    });
  }

  /**
   * [create description]
   * @param  {Campaign}               params [description]
   * @return {Observable<Campaign[]>}        [description]
   */
  create(params: Campaign): Observable<any> {
    return super._create(this.resource)({campaign: params});
  }

  /**
   * [find description]
   * @param  {number}               id [description]
   * @return {Observable<Campaign>}    [description]
   */
  find(id: number): Observable<Campaign> {
    return super._find(this.resource)(id);
  }

  /**
   * Identifica se o registro deve ser criado ou atualizado e direciona para a
   * função de tratamento correta
   * @param  {any}             params Informações do registro
   * @return {Observable<any>}        Observavel de retorno do request
   */
  handle(params: any): Observable<any> {
    if (params.id) {
      return this.update(params.id, params);
    }
    return this.create(params);
  }

  /**
   * [list description]
   * @return {Observable<any>} [description]
   */
  list(): Observable<Campaign[]> {
    return super._list(this.resource)();
  }

  /**
   * [update description]
   * @param  {number}          id     [description]
   * @param  {Campaign}        params [description]
   * @return {Observable<any>}        [description]
   */
  update(id: number, params: Campaign): Observable<any> {
    return super._update(this.resource)(id, {campaign: params});
  }
}
