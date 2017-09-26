import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { CampaignInvitationService } from '../../../shared/services/campaign-invitation.service';
import { CampaignInvitation } from '../../../shared/entities/campaign-invitation';
import { User } from '../../../shared/entities/user';

@Component({
  selector: 'user-campaign-invitations',
  templateUrl: './user-campaign-invitations.component.html',
  styleUrls: ['./user-campaign-invitations.component.scss']
})
export class UserCampaignInvitationsComponent implements OnInit {

  @Input('user') user: User;
  @Output('invitationChanged') invitationChanged: EventEmitter<any>;
  invitationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private invitationService: CampaignInvitationService,
    private toastrService: ToastrService
  ) {
    this.invitationChanged = new EventEmitter();
  }

  ngOnInit() {
    this.invitationForm = this.formBuilder.group({
      character_id: [ '', Validators.required ]
    });
  }

  acceptInvitation({value, valid}: {value: any, valid: boolean}) {
    let invitation = {};
    invitation['character_id'] = parseInt(value.character_id);
    this.invitationService.acceptInvitation(invitation).subscribe((res) => {
      this.toastrService.success('Solicitação confirmada',
        'Você atendeu ao chamado da aventura. Não esqueça de seus itens mágicos!');
      this.invitationChanged.emit(true);
    }, (error) => {
        this.toastrService.warning('Ooops! ',
          'Aconteceu alguma coisa com o corvo mensageiro! Tente novamente.');
    });
  }

  denyInvitation(invitation: CampaignInvitation) {
    this.invitationService.denyInvitation(invitation).subscribe((res) => {
      this.toastrService.info('Solicitação recusada',
        'Muitas vezes recusar o chamado é uma decisão sábia. Ou não...');
      this.invitationChanged.emit(true);
    });
  }
}
