import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { CampaignInvitationService } from '../../../shared/services/campaign-invitation.service';
import { CampaignInvitation } from '../../../shared/entities/campaign-invitation';

@Component({
  selector: 'user-campaign-invitation',
  templateUrl: './user-campaign-invitation.component.html',
  styleUrls: ['./user-campaign-invitation.component.scss']
})
export class UserCampaignInvitationComponent implements OnInit {

  @Input('invitation') invitation: CampaignInvitation;
  @Output('invitationCompleted') invitationCompleted: EventEmitter<any>;

  constructor(
    private toastrService: ToastrService,
    private invitationService: CampaignInvitationService
  ) {
    this.invitationCompleted = new EventEmitter();
  }

  ngOnInit() {
  }

  acceptInvitation() {
    this.invitationService.acceptInvitation(this.invitation).subscribe((res) => {
      this.toastrService.success('Solicitação confirmada',
        'Você atendeu ao chamado da aventura. Não esqueça de seus itens mágicos!');
      this.invitationCompleted.emit(true);
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
