import { Subscription } from 'rxjs/Subscription';

import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign, CampaignPage, PageCategory } from '../../../../../shared/models';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CampaignPagesService } from '../shared/campaign-pages.service';
import { CoreComponent } from '../../../../../shared/components/core/core.component';
import { PageCategoriesService } from '../shared/page-categories.service';

@Component({
  selector: 'campaign-pages-home',
  templateUrl: './campaign-pages-home.component.html',
  styleUrls: ['./campaign-pages-home.component.scss']
})
export class CampaignPagesHomeComponent implements OnInit, OnDestroy {

  campaign: Campaign;
  campaign_id: number;
  categories: PageCategory[];
  currentCategory: string = '';
  groups: PageCategory[] = [];
  subscription: Subscription;
  pages: CampaignPage[];

  /**
   * [constructor description]
   * @param  {ActivatedRoute}        route                 [description]
   * @param  {Router}                router                [description]
   * @param  {AuthenticationService} authService           [description]
   * @param  {CampaignsService}      campaignsService      [description]
   * @param  {CampaignPagesService}  campaignPagesService   [description]
   * @param  {PageCategoriesService} pageCategoriesService [description]
   * @return {[type]}                                             [description]
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private campaignPagesService: CampaignPagesService,
    private pageCategoriesService: PageCategoriesService
  ) { }

  /**
   * Modifica o tipo de lista a ser carregado
   * @param  {PageCategory} category Categoria de páginas
   * @return {[type]}                [description]
   */
  changeList(category: string) {
    // console.log('changeList', category);
    this.currentCategory = category;
  }

  /**
   * Filtro de páginas selecionadas
   * @return {CampaignPage[]} Lista filtrada de páginas
   */
  get filteredPages(): CampaignPage[] {
    return this.pages.filter((page) => {
      let category = page.page_category;
      return (!this.currentCategory)
        || (category && category.flat_name === this.currentCategory);
    });
  }

  /**
   * Agrupa elementos a partir de nome de propriedade
   * @param  {any[]}  array Coleção de elementos
   * @param  {string} group Nome da propriedade agregadora
   * @return {any}          Objeto de itens catalogados
   */
  groupPages(pages: CampaignPage[]): PageCategory[] {
    let categories: PageCategory[] = [
      {id: null, title: 'Outros', flat_name: null, pages: []}
    ];
    pages.forEach((page) => {
      if (!page.page_category) {
        categories[0].pages.push(page);
      } else {
        if (!categories.find((val) => val.id === page.page_category.id)) {
          categories.push(page.page_category);
        }

        let category: PageCategory = categories.find((category) => {
          return category.id === page.page_category.id;
        });

        category.pages = category.pages || [];
        category.pages.push(page);
      }
    });
    return categories;
  }

  /**
   * Verifica se o usuário atual é o mestre de jogo da campanha
   * @return {boolean} Resultado da verificação
   */
  isCampaignOwner(): boolean {
    return this.authService.isCurrentUser(this.campaign.dungeonMaster);
  }

  /**
   * [isActiveTab description]
   * @param  {number}  index [description]
   * @return {boolean}       [description]
   */
  protected isActiveCategory(index: string): boolean {
    return index === this.currentCategory;
  }

  ngOnDestroy() {
    // if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.parent.parent.parent.params.subscribe((params) => {
      this.campaign_id = params['campaign_id'];

      this.campaignsService.find(this.campaign_id).subscribe((campaign) => {
        this.campaign = campaign;

        this.pageCategoriesService.list().subscribe((categories) => {
          this.categories = categories;
          this.refresh();
        });
      });
    });
  }

  objectToArray(value: any): any[] {
    let collection = [];
    for (let key in value) {
      collection.push
    }
    return collection;
  }

  /**
   * Atualiza dados das listas
   * @return {[type]} [description]
   */
  refresh() {
    if (this.campaign) {
      let params: URLSearchParams = new URLSearchParams('');
      params.set('page_category', this.currentCategory);
      this.campaignPagesService.listChildren(this.campaign_id, params)
        .subscribe((pages) => {
          this.pages = pages;
          this.groups = this.groupPages(this.pages);
        });
    }
  }
}
