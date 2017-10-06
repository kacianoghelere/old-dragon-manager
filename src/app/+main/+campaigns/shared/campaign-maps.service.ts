import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { EntityService } from '../../../shared/services/entity.service';
import { Campaign } from '../../../shared/entities/campaign';
import { CampaignMap } from '../../../shared/entities/campaign-map';

@Injectable()
export class CampaignMapsService extends EntityService<CampaignMap> {

  parentResource: string = 'campaigns';
  resource: string = 'maps';

  constructor(
    authService: AuthenticationService,
    http: Http
  ) {
    super(authService, http);
  }

  /**
   * Cria mapa de campanha
   * @param  {number}     campaign_id ID da campanha
   * @param  {any}        params      Parâmetros de criação do mapa
   * @return {Observable}             Observavel de retorno do request
   */
  createChild(
    campaign_id: number,
    params: any
  ): Observable<any> {
    let _createChild = super._createChild(this.parentResource, this.resource);
    return _createChild(campaign_id, {campaign_map: params});
  }

  /**
   * Destrói mapa de campanha
   * @param  {number}     campaign_id ID da campanha
   * @param  {number}     map_id      ID do mapa de campanha
   * @return {Observable}             Observavel de retorno do request
   */
  destroyChild(campaign_id: number, map_id: number): Observable<any> {
    let destroyChild = super._destroyChild(this.parentResource, this.resource);
    return destroyChild(campaign_id, map_id);
  }

  /**
   * Busca mapa de campanha
   * @param  {number}     campaign_id ID da campanha
   * @param  {number}     map_id      ID do mapa de campanha
   * @return {Observable}             Observavel de retorno do request
   */
  findChild(campaign_id: number, map_id: number): Observable<CampaignMap> {
    let findChildren = super._findChildren(this.parentResource, this.resource);
    return findChildren(campaign_id, map_id);
  }

  /**
   * Identifica se o registro deve ser criado ou atualizado e direciona para a
   * função de tratamento correta
   * @param  {any}        params Informações do registro
   * @return {Observable}        Observavel de retorno do request
   */
  handle(params: any): Observable<any> {
    if (params.id) {
      return this.updateChild(params.campaign_id, params.id, params);
    }
    return this.createChild(params.campaign_id, params);
  }

  /**
   * Busca mapas de campanha
   * @param  {number}          campaign_id ID da campanha
   * @param  {URLSearchParams} params      Parâmetros de busca
   * @return {Observable}                  Observavel de retorno do request
   */
  listChildren(
    campaign_id: number,
    params?: URLSearchParams
  ): Observable<CampaignMap[]> {
    let custom = super._custom(this.parentResource, this.resource);
    return custom(campaign_id, params);
  }

  /**
   * Atualiza mapa de campanha
   * @param  {number}     campaign_id ID da campanha
   * @param  {number}     map_id      ID do mapa de campanha
   * @param  {any}        params      Parâmetros de atualização do mapa
   * @return {Observable}             Observavel de retorno do request
   */
  updateChild(
    campaign_id: number,
    map_id: number,
    params: any
  ): Observable<any> {
    let updateChild = super._updateChild(this.parentResource, this.resource);
    return updateChild(campaign_id, map_id, {campaign_map: params});
  }

}
