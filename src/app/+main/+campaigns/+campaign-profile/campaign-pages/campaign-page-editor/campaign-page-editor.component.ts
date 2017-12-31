import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign, CampaignPage, PageCategory } from '../../../../../shared/models';
import { CoreComponent } from '../../../../../shared/components/core/core.component';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CampaignPagesService } from '../shared/campaign-pages.service';
import { PageCategoriesService } from '../shared/page-categories.service';

@Component({
  selector: 'campaign-page-editor',
  templateUrl: './campaign-page-editor.component.html',
  styleUrls: ['./campaign-page-editor.component.scss']
})
export class CampaignPageEditorComponent extends CoreComponent
    implements OnInit {

  campaign: Campaign;
  campaign_id: number;
  page: CampaignPage;
  pageCategories: PageCategory[];
  pageForm: FormGroup;
  subscription: Subscription;
  flat_name: string;
  categoryName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private campaignPagesService: CampaignPagesService,
    private toastrService: ToastrService,
    private pageCategoriesService: PageCategoriesService
  ) {
    super();
  }

  /**
   * Verifica se a página pode ser destruída
   * @return {boolean} Resultado da verificação
   */
  canDestroy() {
    return this.isCampaignOwner() && !!(this.page.id);
  }

  /**
   * Executa rota de navegação adequada
   */
  goBack() {
    if (this.page && this.page.id) {
      this.router.navigate([
        '/main/campaigns', this.campaign_id, 'pages', this.flat_name
      ]);
    } else {
      this.router.navigate(['/main/campaigns', this.campaign_id, 'pages']);
    }
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  /**
   * Verifica se o usuário atual é o mestre de jogo da campanha
   * @return {boolean} Resultado da verificação
   */
  isCampaignOwner(): boolean {
    return this.authService.isCurrentUser(this.campaign.dungeonMaster);
  }

  /**
   * Verifica se o formulário está pronto para edição
   * @return {boolean} Resultado da verificação
   */
  isFormReady(): boolean {
    return !!(this.campaign) && !!(this.pageForm);
  }

  ngOnInit() {
    // Busca categorias
    this.pageCategoriesService.list().subscribe((pageCategories) => {
      this.pageCategories = pageCategories;
      // Observa parametros da rota principal
      this.route.parent.parent.parent.params.subscribe((params) => {
        this.campaign_id = params['campaign_id'];

        this.campaignsService.find(this.campaign_id).subscribe((campaign) => {
          this.campaign = campaign;
          // Observa parametros da rota secundária
          this.route.params.subscribe((childParams) => {
            // console.log('route.params', childParams);
            this.flat_name = childParams['page_id'];
            this.route.queryParams.subscribe((queryParams) => {
              this.categoryName = queryParams.category || '';
              if (this.flat_name) {
                this.subscription = this.campaignPagesService
                .findChild(this.campaign_id, this.flat_name)
                .subscribe((page) => {
                  this.page = page;
                  this.toFormGroup(this.page);
                });
              } else {
                this.page = {
                  id: null,
                  title: '',
                  body: '',
                  picture: ''
                };
                this.toFormGroup(this.page);
              }
            });
          });
        });
      });
    });
  }

  onSubmit({value, valid}: {value: any, valid: boolean}) {
    // console.log("Submetido!", value);
    let params: any = {
      id: value.id,
      title: value.title,
      body: value.body,
      picture: value.picture,
      dm_only: value.dm_only,
      campaign_id: this.campaign_id,
      page_category: value.category
    };
    this.campaignPagesService.handle(params).subscribe(
      (response: CampaignPage) => {
        // console.log("Salvou!", response);
        if (!this.page.id) {
          this.page.id = response.id;
        }
        if (!this.flat_name || (this.flat_name !== response.flat_name)) {
          this.flat_name = response.flat_name;
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
      }
    );
  }

  /**
     * Dispara destruição de página
   */
  destroyPage(): void {
    this.campaignPagesService.destroyChild(this.campaign_id, this.flat_name)
      .subscribe((response) => {
        console.log("Deletou!", response);
        this.page = null;
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
   * Cria novo FormGroup para a página da campanha
   * @param  {CampaignPage}  page Entidade de página da campanha
   * @return {FormGroup}                          The new FormGroup
   */
  toFormGroup(page: CampaignPage): void {
    this.page = this.page || {title: '', body: ''};
    let category = page['page_category'] || {};
    let page_category_id = category ? category['flat_name'] : null;
    this.pageForm = this.formBuilder.group({
      id : this.page.id,
      title: [
        this.page.title, [
          Validators.required,
          Validators.maxLength(45),
          Validators.minLength(6)
        ]
      ],
      body: [this.page.body, Validators.required],
      picture: [this.page.picture],
      dm_only: [this.page.dm_only || false],
      category: page_category_id || this.categoryName
    });
  }
}
