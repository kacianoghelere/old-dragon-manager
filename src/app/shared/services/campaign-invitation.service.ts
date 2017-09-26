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
   * [acceptInvitation description]
   * @param  {any} invitation [description]
   * @return {Observable<any>}               [description]
   */
  acceptInvitation(invitation: any) {
    invitation.accepted = true;
    return this.update(invitation.id, invitation);
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
   * [denyInvitation description]
   * @param  {any} invitation [description]
   * @return {Observable<any>}               [description]
   */
  denyInvitation(invitation: any) {
    invitation.denied = true;
    return this.update(invitation.id, invitation);
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
   * [update description]
   * @param  {number}             id     [description]
   * @param  {CampaignInvitation} params [description]
   * @return {Observable<any>}           [description]
   */
  update(id: number, params: CampaignInvitation): Observable<any> {
    return super._update(this.resource)(id, {campaign_invitation: params});
  }
}
