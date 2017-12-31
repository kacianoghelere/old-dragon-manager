import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { Campaign } from '../../../shared/models';
import { CampaignsService } from '../shared/campaigns.service';
import { CampaignFormService } from './shared/campaign-form.service';

@Component({
  selector: 'campaign-editor',
  templateUrl: './campaign-editor.component.html',
  styleUrls: ['./campaign-editor.component.scss'],
  providers: [CampaignFormService]
})
export class CampaignEditorComponent implements OnInit, OnDestroy {

  campaign: Campaign;
  campaignForm: FormGroup;
  subscription: Subscription;

  /**
   * [constructor description]
   * @param  {ActivatedRoute}        route               [description]
   * @param  {Router}                router              [description]
   * @param  {FormBuilder}           formBuilder         [description]
   * @param  {AuthenticationService} authService         [description]
   * @param  {CampaignsService}      campaignsService    [description]
   * @param  {CampaignFormService}   campaignFormService [description]
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private campaignFormService: CampaignFormService,
    private campaignsService: CampaignsService,
    private toastrService: ToastrService
  ) { }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['campaign_id'];

      if (id) {
        this.subscription = this.campaignsService.find(id)
          .subscribe((response) => {
            this.campaignFormService.campaign = this.campaign = response;
            this.toFormGroup(this.campaign);
          });
      } else {
        this.campaign = {
          id: null,
          title: '',
          picture: '',
          description: '',
          dungeonMaster: this.authService.currentUser
        };
        this.campaignFormService.campaign = this.campaign;
        this.toFormGroup(this.campaign);
      }
    });
  }

  /**
   * Executa rota de navegação adequada
   */
  goBack() {
    if (this.campaign.id) {
      this.router.navigate(['/main/campaigns', this.campaign.uuid]);
    } else {
      this.router.navigate(['/main/campaigns/']);
    }
  }

  onSubmit({value, valid}: {value: Campaign, valid: boolean}) {
    console.log("Submetido!", value);
    let params = {
      id: value.id,
      title: value.title,
      picture: value.picture,
      description: value.description
    };
    this.campaignsService.handle(params).subscribe(
      (response: Campaign) => {
        if (!this.campaign.id) {
          this.campaign.id = response.id;
        }
        if (!this.campaign.uuid) {
          this.campaign.uuid = response.uuid;
        }
        this.toastrService.success('Operação concluída',
          'Os dados da campanha foram gravados com sucesso.');
        this.goBack();
      },
      (error) => {
        this.toastrService.warning('Ooops! Ocorreu um erro.',
          'Parace que algum kobold andou mexendo nos cabos de rede.');
      }
    );
  }

  /**
   * Cria novo FormGroup para a campanha
   * @param {Campaign} campaign Entidade da campanha
   */
  toFormGroup(campaign: Campaign) {
    this.campaignForm = this.formBuilder.group({
      id : this.campaign.id,
      title: [
        this.campaign.title, [
          Validators.required, Validators.maxLength(45), Validators.minLength(6)
        ]
      ],
      picture: [this.campaign.picture, Validators.maxLength(300)],
      description: [this.campaign.description, Validators.required]
    });
  }
}
