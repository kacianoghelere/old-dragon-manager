import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { EntityService } from '../../../shared/services/entity.service';
import { Campaign } from '../../../shared/entities/campaign';
import { CampaignInvitation } from '../../../shared/entities/campaign-invitation';
import { CharactersService } from '../../shared/characters.service';

@Injectable()
export class CampaignInvitationService extends EntityService<any> {

  resource: string = 'campaign_invitations';
  constructor(
    authService: AuthenticationService,
    http: Http,
    private charactersService: CharactersService
  ) {
    super(authService, http);
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

  update(id: number, params: CampaignInvitation): Observable<any> {
    return super._update(this.resource)(id, {campaign_invitation: params});
  }
}
