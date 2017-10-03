import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { Campaign } from '../../../shared/entities/campaign';
import { CampaignsService } from '../shared/campaigns.service';
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
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['campaign_id'];

      if (id) {
        this.subscription = this.campaignsService.find(id)
          .subscribe((response) => {
            this.campaignFormService.campaign = this.campaign = response;
            this.toFormGroup(this.campaign);
          });
      } else {
        this.campaign = {
          id: null,
          title: '',
          picture: '',
          description: '',
          journals: [],
          notes: [],
          dungeonMaster: this.authService.currentUser
        };
        this.campaignFormService.campaign = this.campaign;
        this.toFormGroup(this.campaign);
      }
    });
  }

  /**
   * Executa rota de navegação adequada
   */
  goBack() {
    if (this.campaign.id) {
      this.router.navigate(['/main/campaigns', this.campaign.id]);
    } else {
      this.router.navigate(['/main/campaigns/']);
    }
  }

  onSubmit({value, valid}: {value: Campaign, valid: boolean}) {
    console.log("Submetido!", value);
    let params = {
      id: value.id,
      title: value.title,
      picture: value.picture,
      description: value.description,
      journals_attributes: value.journals,
      notes_attributes: value.notes,
      characters: value.characters
    };
    this.campaignsService.handle(params).subscribe(
      (response: Campaign) => {
        console.log("Salvou!", response);
        if (!this.campaign.id) {
          this.campaign.id = response.id;
        }
        this.goBack();
      },
      (error) => console.log("Deu PT!", error)
    );
  }

  /**
   * Cria novo FormGroup para a campanha
   * @param  {Campaign}  campaign Campaign entity
   * @return {FormGroup}          The new FormGroup
   */
  toFormGroup(campaign: Campaign) {
    this.campaignForm = this.formBuilder.group({
      id : this.campaign.id,
      title: [
        this.campaign.title, [
          Validators.required, Validators.maxLength(45), Validators.minLength(6)
        ]
      ],
      picture: [this.campaign.picture, Validators.maxLength(300)],
      description: [this.campaign.description, Validators.required]
    });
  }
}
