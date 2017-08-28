import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { EntityService } from '../../../shared/services/entity.service';
import { Campaign } from '../../../shared/entities/campaign';
import { CharactersService } from '../../shared/characters.service';

@Injectable()
export class CampaignsService extends EntityService<Campaign> {

  campaigns: Campaign[];

  constructor(
    authService: AuthenticationService,
    http: Http,
    private charactersService: CharactersService
  ) {
    super(authService, http);
    this.campaigns = [
      {
        id: 1,
        title: 'Campanha 1',
        description: 'Descrição da Campanha 1',
        characters: this.charactersService.list(),
        journals: [
          {
            title: 'Primeira sessão',
            description: this.getLorem()
          },
          {
            title: 'Segunda sessão',
            description: this.getLorem()
          }
        ],
        notes: [
          {description: this.getLorem()},
          {description: this.getLorem()},
          {description: this.getLorem()},
          {description: this.getLorem()},
          {description: this.getLorem()}
        ],
        user: authService.currentUser
      }
    ];
  }

  /**
   * [find description]
   * @param  {number}          id [description]
   * @return {Observable<any>}    [description]
   */
  find(id: number): Campaign {
    // return super._find("campaigns")(id);
    return this.campaigns.find((campaign) => campaign.id == id);
  }

  /**
   * [list description]
   * @return {Observable<any>} [description]
   */
  list(): Campaign[] {
    // return super._list("campaigns")();
    return this.campaigns;
  }

}
