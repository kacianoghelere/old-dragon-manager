import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { Campaign } from '../../../../shared/entities/campaign';
import { CampaignsService } from '../../shared/campaigns.service';
import { CampaignFormService } from './shared/campaign-form.service';

@Component({
  selector: 'campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss'],
  providers: [CampaignFormService]
})
export class CampaignFormComponent implements OnInit, OnDestroy {

  campaign: Campaign;
  campaignForm: FormGroup;
  subscription: Subscription;

  /**
   * [constructor description]
   * @param  {ActivatedRoute}        route               [description]
   * @param  {Router}                router              [description]
   * @param  {FormBuilder}           formBuilder         [description]
   * @param  {AuthenticationService} authService         [description]
   * @param  {CampaignsService}      campaignsService    [description]
   * @param  {CampaignFormService}   campaignFormService [description]
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private campaignFormService: CampaignFormService,
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
            this.campaignFormService.campaign = this.campaign = response;
            this.toFormGroup(this.campaign);
          });
      } else {
        this.campaign = {title: '', description: ''};
        this.campaignFormService.campaign = this.campaign;
        this.toFormGroup(this.campaign);
      }
    });
  }

  /**
   * Cria novo FormGroup para a campanha
   * @param  {Campaign}  journal Campaign entity
   * @return {FormGroup}         The new FormGroup
   */
  toFormGroup(campaign: Campaign) {
    this.campaignForm = this.formBuilder.group({
      title: [this.campaign.title, Validators.required],
      description: [this.campaign.description, Validators.required]
    });
    this.campaignForm.valueChanges.subscribe((value) => {
      console.log("campaignForm.valueChanges", value);
    });
  }
}
