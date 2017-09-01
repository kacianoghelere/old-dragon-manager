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
        cover_picture: 'https://images.alphacoders.com/125/125091.jpg',
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
          {description: this.getLorem(), dm_only: true},
          {description: this.getLorem(), dm_only: true},
          {description: this.getLorem(), dm_only: false},
          {description: this.getLorem(), dm_only: false},
          {description: this.getLorem(), dm_only: true}
        ],
        user: authService.currentUser
      },
      {
        id: 2,
        title: 'Campanha 2',
        description: 'Descrição da Campanha 2',
        characters: this.charactersService.list().filter((c) => c.id % 2 == 0),
        cover_picture: 'https://images3.alphacoders.com/152/152779.jpg',
        journals: [
          {
            title: 'Primeira sessão',
            description: this.getLorem()
          },
          {
            title: 'Segunda sessão',
            description: this.getLorem()
          },
          {
            title: 'Terceira sessão',
            description: this.getLorem()
          }
        ],
        notes: [
          {description: this.getLorem(), dm_only: true},
          {description: this.getLorem(), dm_only: true},
          {description: this.getLorem(), dm_only: false},
        ],
        user: authService.currentUser
      },
      {
        id: 3,
        title: 'Campanha 3',
        description: 'Descrição da Campanha 3',
        characters: this.charactersService.list().filter((c) => c.id % 2 == 0),
        cover_picture: 'https://images3.alphacoders.com/152/152779.jpg',
        journals: [
          {
            title: 'Primeira sessão',
            description: this.getLorem()
          },
          {
            title: 'Segunda sessão',
            description: this.getLorem()
          },
          {
            title: 'Terceira sessão',
            description: this.getLorem()
          },
          {
            title: 'Quarta sessão',
            description: this.getLorem()
          }
        ],
        notes: [
          {description: this.getLorem(), dm_only: false},
          {description: this.getLorem(), dm_only: true},
          {description: this.getLorem(), dm_only: false},
          {description: this.getLorem(), dm_only: false},
          {description: this.getLorem(), dm_only: true},
          {description: this.getLorem(), dm_only: true},
          {description: this.getLorem(), dm_only: true},
          {description: this.getLorem(), dm_only: false},
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
