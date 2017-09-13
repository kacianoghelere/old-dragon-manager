import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { Campaign } from '../../../shared/entities/campaign';
import { CampaignService } from './shared/campaign.service';
import { CampaignsService } from '../shared/campaigns.service';

@Component({
  selector: 'campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
  providers: [CampaignService]
})
export class CampaignComponent implements OnInit {

  activeTab: string = 'J';
  campaign: Campaign;
  campaignForm: FormGroup;
  subscription: Subscription;

  /**
   * [constructor description]
   * @param  {ActivatedRoute}        route            [description]
   * @param  {Router}                router           [description]
   * @param  {FormBuilder}           formBuilder      [description]
   * @param  {AuthenticationService} authService      [description]
   * @param  {CampaignsService}      campaignsService [description]
   * @param  {CampaignService}       campaignService  [description]
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private campaignService: CampaignService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];

      if (id) {
        this.subscription = this.campaignsService.find(id)
          .subscribe((response) => {
            this.campaignService.campaign = this.campaign = response;
            this.toFormGroup(this.campaign);
          });
      } else {
        this.campaign = {title: '', description: ''};
        this.campaignService.campaign = this.campaign;
        this.toFormGroup(this.campaign);
      }
    });
  }

  /**
   * Retorna objeto de classe ativa
   * @param  {any}               index Índice da aba
   * @return {{active: Boolean}}       Objeto de classe de aba ativa
   */
  activeTabClass(index: any): {active: Boolean} {
    return {active: this.isActiveTab(index)};
  }

  /**
   * Verifica se o usuário atual pode editar a campanha
   * @return {boolean} Resultado da verificação
   */
  canEdit(): boolean {
    return this.campaignService.canEdit();
  }

  /**
   * Verifica se uma aba é a aba ativa
   * @param  {any}     index Índice da aba
   * @return {Boolean}       Objeto de classe de aba ativa
   */
  isActiveTab(index: any): Boolean {
    return index === this.activeTab;
  }

  onSubmit({value, valid}: {value: Campaign, valid: boolean}) {
    console.log("Salvou!", value);
    this.campaignService.broadcast({editing: false});
  }

  /**
   * Modifica o índice da aba ativa
   * @param {any} index Índice da aba
   */
  setActiveTab(index: any) {
    this.activeTab = index;
  }

  /**
   * Envia notificação de edição do formulário
   * @param {Boolean} status Permissão de edição
   */
  setEditing(status: Boolean) {
    this.campaignService.broadcast({editing: status});
  }

  /**
   * Cria novo FormGroup para a campanha
   * @param  {Campaign}  journal Campaign entity
   * @return {FormGroup}         The new FormGroup
   */
  toFormGroup(campaign: Campaign) {
    this.campaignForm = this.formBuilder.group({
      title: [this.campaign.title, Validators.required],
      description: [this.campaign.description, Validators.required]
    });
    this.campaignForm.valueChanges.subscribe((value) => {
      console.log("campaignForm.valueChanges", value);
    });
  }
}
