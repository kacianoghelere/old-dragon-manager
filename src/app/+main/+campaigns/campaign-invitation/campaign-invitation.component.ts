import { Subscription } from 'rxjs/Subscription';

import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { Campaign } from '../../../shared/entities/campaign';
import { User } from '../../../shared/entities/user';
import { CampaignInvitationService } from '../shared/campaign-invitation.service';
import { UsersService } from '../../../users/users.service';

@Component({
  selector: 'campaign-invitation',
  templateUrl: './campaign-invitation.component.html',
  styleUrls: ['./campaign-invitation.component.scss']
})
export class CampaignInvitationComponent implements OnInit, OnDestroy {

  @Input('campaign') campaign: Campaign;
  subscription: Subscription;
  invitationForm: FormGroup;
  users: User[];

  constructor(
    private authService: AuthenticationService,
    private campaignInvitationService: CampaignInvitationService,
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.invitationForm = this.formBuilder.group({
      user: ['', Validators.required]
    });
    this.users = [];
    let request = this.usersService.listInvitable(this.campaign.id);
    this.subscription = request.subscribe(
      (response) => this.users = response,
      (error) => console.log(error)
    );
  }

  onSubmit({value, valid}: {value: {user: number}, valid: boolean}) {
    let params = {
      user_id: value.user,
      campaign_id: this.campaign.id
    };
    console.log("Submetido!", params);
    this.campaignInvitationService.create(params).subscribe(
      (response: any) => console.log("Salvou!", response),
      (error) => console.log("Deu PT!", error)
    );
  }

}
