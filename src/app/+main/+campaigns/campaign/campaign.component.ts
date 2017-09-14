import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { Campaign } from '../../../shared/entities/campaign';
import { CampaignsService } from '../shared/campaigns.service';


@Component({
  selector: 'campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit, OnDestroy {

  campaign: Campaign;
  subscription: Subscription;

  /**
   * [constructor description]
   * @param  {ActivatedRoute}        route            [description]
   * @param  {Router}                router           [description]
   * @param  {FormBuilder}           formBuilder      [description]
   * @param  {AuthenticationService} authService      [description]
   * @param  {CampaignsService}      campaignsService [description]
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService
  ) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];

      if (id) {
        this.subscription = this.campaignsService.find(id)
          .subscribe((response) => {
            this.campaign = response;
          });
      }
    });
  }

  /**
   * Verifica se o usuário atual pode editar a campanha
   * @return {boolean} Resultado da verificação
   */
  canEdit(): boolean {
    return false;
  }
}
