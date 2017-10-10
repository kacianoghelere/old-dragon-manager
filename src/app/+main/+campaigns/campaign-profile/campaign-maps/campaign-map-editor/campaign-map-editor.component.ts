import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignMap } from '../../../../../shared/entities/campaign-map';
import { CampaignMapsService } from '../shared/campaign-maps.service';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CoreComponent } from '../../../../../shared/components/core/core.component';

@Component({
  selector: 'campaign-map-editor',
  templateUrl: './campaign-map-editor.component.html',
  styleUrls: ['./campaign-map-editor.component.scss']
})
export class CampaignMapEditorComponent extends CoreComponent
    implements OnInit {

  private campaign: Campaign;
  private campaign_id: number;
  private map_id: number;
  private map: CampaignMap;
  private mapForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private formBuilder: FormBuilder,
    private mapsService: CampaignMapsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {
    super();
  }

  /**
   * Verifica se a página pode ser destruída
   * @return {boolean} Resultado da verificação
   */
  canDestroy() {
    return this.isCampaignOwner() && !!(this.map.id);
  }

  /**
   * Executa destruição de nota de campanha
   */
  destroyMap(): void {
    this.mapsService.destroyChild(this.campaign_id, this.map_id)
      .subscribe((response) => {
        console.log("Deletou!", response);
        this.map = null;
        this.toastrService.success(
          'Os dados da página foram gravados com sucesso.',
          'Operação concluída'
        );
        this.goBack();
      },
      (error) => {
        console.log("Deu PT!", error);
        this.toastrService.warning(
          'Parace que algum kobold andou mexendo nos cabos de rede.',
          'Ooops! Ocorreu um erro.'
        );
      });
  }

  /**
   * Executa rota de navegação de retorno
   */
  goBack() {
    this.router.navigate(['/main/campaigns', this.campaign_id, 'maps']);
  }

  /**
   * Verifica se o usuário atual é o mestre de jogo da campanha
   * @return {boolean} Resultado da verificação
   */
  isCampaignOwner(): boolean {
    return this.authService.isCurrentUser(this.campaign.dungeonMaster);
  }

  ngOnInit() {
    this.route.parent.parent.parent.params.subscribe((campaignParams) => {
      this.campaign_id = campaignParams['campaign_id'];
      // console.log(params);
      if (this.campaign_id) {
        this.campaignsService.find(this.campaign_id).subscribe((campaign) => {
          this.campaign = campaign;
          this.route.params.subscribe((mapParams) => {
            this.map_id = mapParams['map_id'];
            if (this.map_id) {
              this.mapsService.findChild(this.campaign_id, this.map_id)
              .subscribe((map) => {
                this.map = map;
                this.mapForm = this.toFormGroup(this.map);
              });
            } else {
              this.map = {
                id: null,
                description: '',
                url: '',
                active: true
              };
              this.mapForm = this.toFormGroup(this.map);
            }
          });
        });
      }
    });
  }

  onSubmit({value, valid}: {value: any, valid: boolean}) {
    console.log("Submetido!", value);
    let params: any = {
      id: value.id,
      active: value.active,
      description: value.description,
      url: value.url,
      campaign_id: this.campaign_id
    };
    this.mapsService.handle(params).subscribe((response: CampaignMap) => {
      // console.log("Salvou!", response);
      if (!this.map.id) {
        this.map.id = response.id;
      }
      this.toastrService.success(
        'Os dados da página foram gravados com sucesso.',
        'Operação concluída'
      );
      this.goBack();
    },
    (error) => {
      console.log("Deu PT!", error);
      this.toastrService.warning(
        'Parace que algum kobold andou mexendo nos cabos de rede.',
        'Ooops! Ocorreu um erro.'
      );
    });
  }

  /**
   * Cria um novo FormGroup para o mapa de campanha
   * @param  {CampaignMap} map Mapa de campanha
   * @return {FormGroup}       Novo FormGroup
   */
  toFormGroup(map: CampaignMap): FormGroup {
    return this.formBuilder.group({
      id: map.id,
      url: [ map.url || '', Validators.required ],
      description: [ map.description || '', Validators.required ],
      active: [ map.active || true ]
    });
  }
}
