import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { CoreComponent } from '../../../shared/components/core/core.component';
import { CampaignInvitationService } from '../../../shared/services/campaign-invitation.service';
import { CampaignInvitation, User } from '../../../shared/models';
import { UsersService } from '../../users.service';

@Component({
  selector: 'user-campaign-invitations',
  templateUrl: './user-campaign-invitations.component.html',
  styleUrls: ['./user-campaign-invitations.component.scss']
})
export class UserCampaignInvitationsComponent extends CoreComponent
  implements OnInit {

  @Input('user') user: User;
  @Output('invitationChanged') invitationChanged: EventEmitter<any>;
  invitationForm: FormGroup;
  invitations: CampaignInvitation[];
  user_id: number;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private invitationService: CampaignInvitationService,
    private usersService: UsersService,
    private toastrService: ToastrService
  ) {
    super();
    this.invitationChanged = new EventEmitter();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.user_id = params['id'];
      this.loadCollection();
    });
  }

  /**
   * Carrega coleção de convites de campanha do usuário
   */
  loadCollection() {
    this.usersService.findCampaignInvitations(this.user_id).subscribe(
      (response) => this.invitations = response,
      (error) => console.log('Erro ao buscar convites de campanha')
    );
  }
}
