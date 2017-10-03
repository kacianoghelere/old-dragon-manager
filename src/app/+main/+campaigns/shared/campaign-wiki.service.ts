import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { EntityService } from '../../../shared/services/entity.service';
import { Campaign } from '../../../shared/entities/campaign';
import { CampaignWikiPage } from '../../../shared/entities/campaign-wiki-page';
import { CharactersService } from '../../shared/characters.service';

@Injectable()
export class CampaignWikiService extends EntityService<CampaignWikiPage> {

  resource: string = 'campaigns';

  constructor(
    authService: AuthenticationService,
    http: Http,
    private charactersService: CharactersService
  ) {
    super(authService, http);
  }

  /**
   * [create description]
   * @param  {CampaignWikiPage}               params [description]
   * @return {Observable<CampaignWikiPage[]>}        [description]
   */
  create(params: CampaignWikiPage): Observable<any> {
    return super._create(this.resource)({campaign: params});
  }

  /**
   * [find description]
   * @param  {number}               id [description]
   * @return {Observable<CampaignWikiPage>}    [description]
   */
  find(id: number): Observable<CampaignWikiPage> {
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
  list(): Observable<CampaignWikiPage[]> {
    return super._list(this.resource)();
  }

  update(id: number, params: CampaignWikiPage): Observable<any> {
    return super._update(this.resource)(id, {campaign: params});
  }
}
