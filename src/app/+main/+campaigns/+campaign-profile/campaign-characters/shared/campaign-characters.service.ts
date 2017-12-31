import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { EntityService } from '../../../../../shared/services/entity.service';
import { Campaign, Character } from '../../../../../shared/models';

@Injectable()
export class CampaignCharactersService extends EntityService<Character> {

  parentResource: string = 'campaigns';
  resource: string = 'characters';

  constructor(
    authService: AuthenticationService,
    http: Http
  ) {
    super(authService, http);
  }
    /**
     * Cria lista de personagens de campanha
     * @param  {number}     campaign_id ID da campanha
     * @param  {any}        params      Parâmetros de criação do diário
     * @return {Observable}             Observavel de retorno do request
     */
    createChild(
      campaign_id: number,
      params: any
    ): Observable<any> {
      let _createChild = super._createChild(this.parentResource, this.resource);
      return _createChild(campaign_id, {characters: params});
    }

    /**
     * Busca lista de personagens de campanha
     * @param  {number}          campaign_id ID da campanha
     * @param  {URLSearchParams} params      Parâmetros de busca
     * @return {Observable}                  Observavel de retorno do request
     */
    listChildren(
      campaign_id: number,
      params?: any
    ): Observable<Character[]> {
      let custom = super._custom(this.parentResource, this.resource);
      return custom(campaign_id, params);
    }

}
