import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { EntityService } from '../../../../../shared/services/entity.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignJournal } from '../../../../../shared/entities/campaign-journal';

@Injectable()
export class CampaignJournalsService extends EntityService<CampaignJournal> {

  parentResource: string = 'campaigns';
  resource: string = 'journals';

  constructor(
    authService: AuthenticationService,
    http: Http
  ) {
    super(authService, http);
  }

  /**
   * Cria diário de campanha
   * @param  {number}     campaign_id ID da campanha
   * @param  {any}        params      Parâmetros de criação do diário
   * @return {Observable}             Observavel de retorno do request
   */
  createChild(
    campaign_id: number,
    params: any
  ): Observable<any> {
    let _createChild = super._createChild(this.parentResource, this.resource);
    return _createChild(campaign_id, {campaign_journal: params});
  }

  /**
   * Destrói diário de campanha
   * @param  {number}     campaign_id ID da campanha
   * @param  {number}     journal_id  ID do diário de campanha
   * @return {Observable}             Observavel de retorno do request
   */
  destroyChild(campaign_id: number, journal_id: number): Observable<any> {
    let destroyChild = super._destroyChild(this.parentResource, this.resource);
    return destroyChild(campaign_id, journal_id);
  }

  /**
   * Busca diário de campanha
   * @param  {number}     campaign_id ID da campanha
   * @param  {number}     journal_id  ID do diário de campanha
   * @return {Observable}             Observavel de retorno do request
   */
  findChild(campaign_id: number, journal_id: number): Observable<CampaignJournal> {
    let findChildren = super._findChildren(this.parentResource, this.resource);
    return findChildren(campaign_id, journal_id);
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
   * Busca diários de campanha
   * @param  {number}          campaign_id ID da campanha
   * @param  {URLSearchParams} params      Parâmetros de busca
   * @return {Observable}                  Observavel de retorno do request
   */
  listChildren(
    campaign_id: number,
    params?: URLSearchParams
  ): Observable<CampaignJournal[]> {
    let custom = super._custom(this.parentResource, this.resource);
    return custom(campaign_id, params);
  }

  /**
   * Atualiza diário de campanha
   * @param  {number}     campaign_id ID da campanha
   * @param  {number}     journal_id  ID do diário de campanha
   * @param  {any}        params      Parâmetros de atualização do diário
   * @return {Observable}             Observavel de retorno do request
   */
  updateChild(
    campaign_id: number,
    journal_id: number,
    params: any
  ): Observable<any> {
    let updateChild = super._updateChild(this.parentResource, this.resource);
    return updateChild(campaign_id, journal_id, {campaign_journal: params});
  }

}
