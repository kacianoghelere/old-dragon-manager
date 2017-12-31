import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CampaignInvitationService } from '../../../../shared/services/campaign-invitation.service';
import { CampaignInvitation, Character, User } from '../../../../shared/models';
import { UsersService } from '../../../users.service';

@Component({
  selector: 'campaign-invitation-form',
  templateUrl: './campaign-invitation-form.component.html',
  styleUrls: ['./campaign-invitation-form.component.scss']
})
export class CampaignInvitationFormComponent implements OnInit {

  @Input('invitation') invitation: CampaignInvitation;
  @Input('user') user: User;
  @Output('invitationChanged') invitationChanged: EventEmitter<any>;
  invitationForm: FormGroup;
  userCharacters: Character[];
  user_id: number;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private invitationService: CampaignInvitationService,
    private usersService: UsersService,
    private toastrService: ToastrService
  ) {
    this.invitationChanged = new EventEmitter();
  }

  /**
   * Aceita convite para campanha
   * @param {{value: any, valid: boolean}} {value, valid} Dados do FormGroup
   */
  acceptInvitation({value, valid}: {value: any, valid: boolean}) {
    let invitation = {id: value.id};
    invitation['character_id'] = parseInt(value.character_id);
    this.invitationService.acceptInvitation(invitation).subscribe((res) => {
      this.toastrService.success('Solicitação confirmada',
        'Você atendeu ao chamado da aventura. Não esqueça de seus itens mágicos!');
      this.removeInvitation(invitation.id);
      this.invitationChanged.emit();
    }, (error) => {
        this.toastrService.warning('Ooops! ',
          'Aconteceu alguma coisa com o corvo mensageiro! Tente novamente.');
    });
  }

  /**
   * Recusa convite para campanha
   * @param  {CampaignInvitation} invitation [description]
   * @return {[type]}                        [description]
   */
  denyInvitation(invitation: CampaignInvitation) {
    this.invitationService.denyInvitation(invitation).subscribe((res) => {
      this.toastrService.info('Solicitação recusada',
        'Muitas vezes recusar o chamado é uma decisão sábia. Ou não...');
      this.removeInvitation(invitation.id);
      this.invitationChanged.emit();
    });
  }

  /**
   * Carrega dados de coleções do usuário a partir do ID recebido
   * @param {number} user_id ID do usuário
   */
  loadCollections(user_id: number) {
    this.usersService.findCharacters(user_id).subscribe(
      (response) => this.userCharacters = response,
      (error) => console.log('Erro ao buscar personagens do usuário')
    );
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.user_id = params['id'];
      this.loadCollections(this.user_id);
    });
    this.invitationForm = this.formBuilder.group({
      id: [ this.invitation.id, Validators.required ],
      character_id: [ '', Validators.required ]
    });
  }

  /**
   * Remove convite para campanha do usuário atual a partir do ID do convite
   * @param {number} id ID do convite
   */
  removeInvitation(invitation_id: number) {
    if (this.authService.isCurrentUser(this.user)) {
      this.authService.removeInvitation(invitation_id);
    }
  }

}
