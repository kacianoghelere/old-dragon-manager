import { Subscription } from 'rxjs/Subscription';

import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { Campaign } from '../../../shared/entities/campaign';
import { User } from '../../../shared/entities/user';
import { CampaignInvitationService } from '../../../shared/services/campaign-invitation.service';
import { UsersService } from '../../../users/users.service';

@Component({
  selector: 'campaign-invite-users',
  templateUrl: './campaign-invite-users.component.html',
  styleUrls: ['./campaign-invite-users.component.scss']
})
export class CampaignInviteUsersComponent implements OnInit, OnDestroy {

  @Input('campaign') campaign: Campaign;
  subscription: Subscription;
  invitationForm: FormGroup;
  users: User[];

  constructor(
    private authService: AuthenticationService,
    private campaignInvitationService: CampaignInvitationService,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private toastrService: ToastrService
  ) { }

  /**
   * Verifica se ainda existem usuário disponíveis para convidar
   * @return {boolean} Resultado da verificação
   */
  hasUsers(): boolean {
    return !!(this.users && this.users.length);
  }

  /**
   * Carrega dados de usuários que ainda podem ser adicionados à campanha
   */
  loadUsers() {
    this.users = [];
    let request = this.usersService.listInvitable(this.campaign.id);
    this.subscription = request.subscribe(
      (response) => this.users = response,
      (error) => console.log(error)
    );
    this.invitationForm.controls.user.setValue('');
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.invitationForm = this.formBuilder.group({
      user: ['', Validators.required]
    });
    this.loadUsers();
  }

  onSubmit({value, valid}: {value: {user: number}, valid: boolean}) {
    let params = {
      user_id: value.user,
      campaign_id: this.campaign.id
    };
    console.log("Submetido!", params);
    this.campaignInvitationService.create(params).subscribe(
      (response: any) => {
        this.toastrService.success(
          'O chamado da aventura já está a caminho do herói!',
          'Convite enviado'
        );
        this.loadUsers();
      },
      (error) => {
        this.toastrService.warning(
          'Parace que algum kobold andou mexendo nos cabos de rede.',
          'Ooops! Ocorreu um erro.'
        );
      }
    );
  }

}
