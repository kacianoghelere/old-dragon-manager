import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { CampaignInvitationService } from '../../../shared/services/campaign-invitation.service';
import { CampaignInvitation } from '../../../shared/entities/campaign-invitation';
import { User } from '../../../shared/entities/user';

@Component({
  selector: 'user-campaign-invitation',
  templateUrl: './user-campaign-invitation.component.html',
  styleUrls: ['./user-campaign-invitation.component.scss']
})
export class UserCampaignInvitationComponent implements OnInit {

  @Input('user') user: User;
  @Input('invitation') invitation: CampaignInvitation;
  @Output('invitationCompleted') invitationCompleted: EventEmitter<any>;
  invitationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private invitationService: CampaignInvitationService,
    private toastrService: ToastrService
  ) {
    this.invitationCompleted = new EventEmitter();
  }

  ngOnInit() {
    this.invitationForm = this.formBuilder.group({
      userCharacter: [ '', Validators.required ]
    });
  }

  acceptInvitation({value, valid}: {value: any, valid: boolean}) {
    this.invitation.character_id = parseInt(value.userCharacter);
    this.invitationService.acceptInvitation(this.invitation).subscribe((res) => {
      this.toastrService.success('Solicitação confirmada',
        'Você atendeu ao chamado da aventura. Não esqueça de seus itens mágicos!');
      this.invitationCompleted.emit(true);
    }, (error) => {
        this.toastrService.warning('Ooops! ',
          'Aconteceu alguma coisa com o corvo mensageiro! Tente novamente.');
    });
  }

  denyInvitation() {
    this.invitationService.denyInvitation(this.invitation).subscribe((res) => {
      this.toastrService.info('Solicitação recusada',
        'Muitas vezes recusar o chamado é uma decisão sábia. Ou não...');
      this.invitationCompleted.emit(true);
    });
  }
}
