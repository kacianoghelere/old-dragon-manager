import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { Campaign } from '../../../shared/entities/campaign';
import { CampaignsService } from '../shared/campaigns.service';
import { CampaignWatcherService } from '../shared/campaign-watcher.service';

@Component({
  selector: 'campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  activeTab: number = 1;
  campaign: Campaign;
  campaignForm: FormGroup;
  subscription: Subscription;
  private enabledEditing: Boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private watcherService: CampaignWatcherService
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
        this.campaignForm = this.toFormGroup(this.campaign);
      }
    });
    this.watcherService.editingEmitter.subscribe((status) => {
      console.log("Mudou status de edição nos dados principais", status);
      this.enabledEditing = status.editing;
    });
  }

  isActiveTab(index) {
    return {active: index === this.activeTab};
  }

  onSubmit({ value, valid }: { value: Campaign, valid: boolean }) {
    console.log("Salvou!", value);
    this.watcherService.broadcast({editing: false});
  }

  setActiveTab(index) {
    this.activeTab = index;
  }

  /**
   * Envia notificação de edição do formulário
   * @param {Boolean} status Permissão de edição
   */
  setEditing(status: Boolean) {
    this.watcherService.broadcast({editing: status});
  }

  /**
   * Generates a new FormGroup form the campaign
   * @param  {Campaign}  journal Campaign entity
   * @return {FormGroup}         The new FormGroup
   */
  toFormGroup(campaign: Campaign): FormGroup {
    return this.campaignForm = this.formBuilder.group({
      title: [this.campaign.title, Validators.required],
      description: [this.campaign.description, Validators.required]
    });
  }
}
