import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CoreComponent } from '../../../shared/components/core/core.component';
import { Campaign } from '../../../shared/models';
import { UsersService } from '../../users.service';

@Component({
  selector: 'user-campaigns',
  templateUrl: './user-campaigns.component.html',
  styleUrls: ['./user-campaigns.component.scss']
})
export class UserCampaignsComponent extends CoreComponent implements OnInit {

  campaigns: Campaign[];

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => this.loadCollections(params['id']));
  }

  /**
   * Carrega dados de coleções do usuário a partir do ID recebido
   * @param {number} user_id ID do usuário
   */
  loadCollections(user_id: number) {
    this.usersService.findCampaigns(user_id).subscribe(
      (response) => this.campaigns = response,
      (error) => console.log('Erro ao buscar campanhas do usuário')
    );
  }
}
