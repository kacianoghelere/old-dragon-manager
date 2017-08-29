import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { Campaign } from '../../../shared/entities/campaign';
import { CampaignsService } from "../shared/campaigns.service";

@Component({
  selector: 'campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  activeTab: number = 1;
  campaign: Campaign;
  campaignForm: FormGroup;
  editing: Boolean = false;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService
  ) { }

  ngOnInit() {


    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        // this.subscription = this.campaignsService.find(id)
        //   .subscribe((response) => {
        //     this.campaign = response;
        //     console.log(this.campaign);
        //   });
        this.campaign = this.campaignsService.find(id);
        // this.campaignForm.setValue({
        //   title: this.campaign.title,
        //   description: this.campaign.description
        // });
      }
      this.campaignForm = this.formBuilder.group({
        title: [this.campaign.title, Validators.required],
        description: [this.campaign.description, Validators.required],
        journals: this.formBuilder.array(this.campaign.journals),
        notes: this.formBuilder.array(this.campaign.notes)
      });
    });
  }

  isActiveTab(index) {
    return {active: index === this.activeTab};
  }

  setActiveTab(index) {
    this.activeTab = index;
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  startEditing() {
    this.editing = true;
  }

  cancelEditing() {
    this.editing = false;
  }

  onSubmit({ value, valid }: { value: Campaign, valid: boolean }) {
    console.log("Salvou!", value);
    this.editing = false;
  }
}
