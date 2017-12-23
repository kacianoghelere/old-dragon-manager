import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../authentication/authentication.service';
import { EntityService } from './entity.service';
import { Campaign } from '../entities/campaign';
import { CampaignInvitation } from '../entities/campaign-invitation';

@Injectable()
export class CampaignInvitationService extends EntityService<any> {

  resource: string = 'campaign_invitations';
  constructor(
    authService: AuthenticationService,
    http: Http,
  ) {
    super(authService, http);
  }

  /**
   * Aceita convite para campanha
   * @param  {any}             invitation Dados do convite
   * @return {Observable<any>}            Retorno do request
   */
  acceptInvitation(invitation: any) {
    invitation['accepted'] = true;
    return this.update(invitation['id'], invitation);
  }

  /**
   * [create description]
   * @param  {any}               params [description]
   * @return {Observable<any[]>}        [description]
   */
  create(params: any): Observable<any> {
    return super._create(this.resource)({campaign_invitation: params});
  }

  /**
   * Recusa convite para campanha
   * @param  {any}             invitation Dados do convite
   * @return {Observable<any>}            Retorno do request
   */
  denyInvitation(invitation: any) {
    invitation['denied'] = true;
    return this.update(invitation['id'], invitation);
  }

  /**
   * [find description]
   * @param  {number}               id [description]
   * @return {Observable<CampaignInvitation>}    [description]
   */
  find(id: number): Observable<CampaignInvitation> {
    return super._find(this.resource)(id);
  }

  /**
   * [list description]
   * @return {Observable<any>} [description]
   */
  list(): Observable<CampaignInvitation[]> {
    return super._list(this.resource)();
  }

  /**
   * Atualiza dados do convite para campanha
   * @param  {number}             id     ID do convite para campanha
   * @param  {CampaignInvitation} params Dados do convite para campanha
   * @return {Observable<any>}           Retorno do request
   */
  update(id: number, params: any): Observable<any> {
    return super._update(this.resource)(id, {campaign_invitation: params});
  }
}
