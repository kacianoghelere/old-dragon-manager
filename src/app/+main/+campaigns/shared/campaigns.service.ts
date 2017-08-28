import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { EntityService } from '../../../shared/services/entity.service';
import { Campaign } from '../../../shared/entities/campaign';

@Injectable()
export class CampaignsService extends EntityService<Campaign> {

  campaigns: Campaign[];

  constructor(authService: AuthenticationService, http: Http) {
    super(authService, http);
    let user = authService.currentUser;
    this.campaigns = [
      {
        id: 1,
        title: 'Campanha 1',
        description: 'Descrição da Campanha 1',
        characters: [
          {
            name: 'Torhmmund, o Ruivo',
            player: 'Zézinho',
            race: 'Humano',
            class_name: 'Homem de Armas',
            specialization: 'Guerreiro',
            picture: 'https://vignette3.wikia.nocookie.net/villains/'
              + 'images/7/73/Tormund.jpg/revision/latest?cb=20151228003756',
            description: this.getLorem(),
            attribute: {
              strength: 10,
              dexterity: 13,
              constitution: 12,
              intelligence: 10,
              wisdom: 8,
              charisma: 9
            }
          },
          {
            name: 'Zanzen',
            player: 'Pelé',
            race: 'Humano',
            class_name: 'Homem de Armas',
            specialization: 'Guerreiro',
            picture: 'http://vignette2.wikia.nocookie.net/powdermage/images/4/'
              + '4c/Tamas_Detail_03.jpg/revision/latest?cb=20150807005553',
            description: this.getLorem(),
            attribute: {
              strength: 13,
              dexterity: 15,
              constitution: 11,
              intelligence: 14,
              wisdom: 11,
              charisma: 10
            }
          },
          {
            name: 'Fofão, o Boneco Satanizado',
            player: 'Elvis',
            race: 'Humano',
            class_name: 'Homem de Armas',
            specialization: 'Guerreiro',
            picture: 'http://www.atoananet.com.br/links/2016/09/21/'
              + 'nao-mexa-com-o-fofao-da-carreta-furacao_300.jpg',
            description: this.getLorem(),
            attribute: {
              strength: 10,
              dexterity: 10,
              constitution: 10,
              intelligence: 10,
              wisdom: 10,
              charisma: 10
            }
          }
        ],
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
        user: user
      }
    ];
  }

  private getLorem() : string {
    return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do '
      +'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim '
      +'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut '
      +'aliquip ex ea commodo consequat. Duis aute irure dolor in '
      +'reprehenderit in voluptate velit esse cillum dolore eu fugiat '
      +'nulla pariatur. Excepteur sint occaecat cupidatat non proident, '
      +'sunt in culpa qui officia deserunt mollit anim id est laborum.';
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
