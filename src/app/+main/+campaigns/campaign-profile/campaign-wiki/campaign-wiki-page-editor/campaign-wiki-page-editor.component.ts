import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignWikiPage } from '../../../../../shared/entities/campaign-wiki-page';
import { CoreComponent } from '../../../../../shared/components/core/core.component';
import { WikiCategory } from '../../../../../shared/entities/wiki-category';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CampaignWikiService } from '../shared/campaign-wiki.service';
import { WikiCategoriesService } from '../shared/wiki-categories.service';

@Component({
  selector: 'campaign-wiki-page-editor',
  templateUrl: './campaign-wiki-page-editor.component.html',
  styleUrls: ['./campaign-wiki-page-editor.component.scss']
})
export class CampaignWikiPageEditorComponent extends CoreComponent
    implements OnInit {

  campaign: Campaign;
  campaign_id: number;
  wikiPage: CampaignWikiPage;
  wikiCategories: WikiCategory[];
  wikiPageForm: FormGroup;
  subscription: Subscription;
  wiki_name: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private campaignWikiService: CampaignWikiService,
    private toastrService: ToastrService,
    private wikiCategoriesService: WikiCategoriesService
  ) {
    super();
  }

  /**
   * Verifica se a página pode ser destruída
   * @return {boolean} Resultado da verificação
   */
  canDestroy() {
    return this.isCampaignOwner() && !!(this.wikiPage.id);
  }

  /**
   * Executa rota de navegação adequada
   */
  goBack() {
    if (this.wikiPage && this.wikiPage.id) {
      this.router.navigate([
        '/main/campaigns', this.campaign_id, 'wiki', this.wiki_name
      ]);
    } else {
      this.router.navigate(['/main/campaigns', this.campaign_id, 'wiki']);
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
    return !!(this.campaign) && !!(this.wikiPageForm);
  }

  ngOnInit() {
    // Busca categorias
    this.wikiCategoriesService.list().subscribe((wikiCategories) => {
      this.wikiCategories = wikiCategories;
      // Observa parametros da rota principal
      this.route.parent.parent.parent.params.subscribe((params) => {
        this.campaign_id = params['campaign_id'];

        this.campaignsService.find(this.campaign_id).subscribe((campaign) => {
          this.campaign = campaign;
          // Observa parametros da rota secundária
          this.route.params.subscribe((childParams) => {
            // console.log('route.params', childParams);
            this.wiki_name = childParams['page_id'];
            if (this.wiki_name) {
              this.subscription = this.campaignWikiService
              .findChild(this.campaign_id, this.wiki_name)
              .subscribe((wikiPage) => {
                this.wikiPage = wikiPage;
                this.toFormGroup(this.wikiPage);
              });
            } else {
              this.wikiPage = {
                id: null,
                title: '',
                body: '',
                picture: ''
              };
              this.toFormGroup(this.wikiPage);
            }
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
      wiki_category_id: value.category
    };
    this.campaignWikiService.handle(params).subscribe(
      (response: CampaignWikiPage) => {
        // console.log("Salvou!", response);
        if (!this.wikiPage.id) {
          this.wikiPage.id = response.id;
        }
        if (!this.wiki_name || (this.wiki_name !== response.wiki_name)) {
          this.wiki_name = response.wiki_name;
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
   * Dispara destruição de página wiki
   */
  destroyPage(): void {
    this.campaignWikiService.destroyChild(this.campaign_id, this.wiki_name)
      .subscribe((response) => {
        console.log("Deletou!", response);
        this.wikiPage = null;
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
   * @param  {CampaignWikiPage}  wikiPage Entidade de página da campanha
   * @return {FormGroup}                          The new FormGroup
   */
  toFormGroup(wikiPage: CampaignWikiPage): void {
    let page = this.wikiPage || {};
    let category = page['wiki_category'] || {};
    let wiki_category_id = category ? category['id'] : null;
    this.wikiPageForm = this.formBuilder.group({
      id : this.wikiPage.id,
      title: [
        this.wikiPage.title, [
          Validators.required,
          Validators.maxLength(45),
          Validators.minLength(6)
        ]
      ],
      body: [this.wikiPage.body, Validators.required],
      picture: [this.wikiPage.picture],
      dm_only: [this.wikiPage.dm_only || false],
      category: wiki_category_id || ''
    });
  }
}
