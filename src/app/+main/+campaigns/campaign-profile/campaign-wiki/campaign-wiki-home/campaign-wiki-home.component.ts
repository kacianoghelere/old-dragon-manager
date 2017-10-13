import { Subscription } from 'rxjs/Subscription';

import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignWikiPage } from '../../../../../shared/entities/campaign-wiki-page';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CampaignWikiService } from '../shared/campaign-wiki.service';
import { CoreComponent } from '../../../../../shared/components/core/core.component';
import { WikiCategoriesService } from '../shared/wiki-categories.service';
import { WikiCategory } from '../../../../../shared/entities/wiki-category';

@Component({
  selector: 'campaign-wiki-home',
  templateUrl: './campaign-wiki-home.component.html',
  styleUrls: ['./campaign-wiki-home.component.scss']
})
export class CampaignWikiHomeComponent implements OnInit, OnDestroy {

  campaign: Campaign;
  campaign_id: number;
  categories: WikiCategory[];
  currentCategory: string = '';
  subscription: Subscription;
  wikiPages: CampaignWikiPage[];

  /**
   * [constructor description]
   * @param  {ActivatedRoute}        privateroute                 [description]
   * @param  {Router}                privaterouter                [description]
   * @param  {AuthenticationService} privateauthService           [description]
   * @param  {CampaignsService}      privatecampaignsService      [description]
   * @param  {CampaignWikiService}   privatecampaignWikiService   [description]
   * @param  {WikiCategoriesService} privatewikiCategoriesService [description]
   * @return {[type]}                                             [description]
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private campaignWikiService: CampaignWikiService,
    private wikiCategoriesService: WikiCategoriesService
  ) { }

  /**
   * Modifica o tipo de lista a ser carregado
   * @param  {WikiCategory} category Categoria de páginas wiki
   * @return {[type]}                [description]
   */
  changeList(category: string) {
    console.log('changeList', category);
    this.currentCategory = category;
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

        this.wikiCategoriesService.list().subscribe((categories) => {
          this.categories = categories;
          this.refresh();
        });
      });
    });
  }

  /**
   * Filtro de páginas selecionadas
   * @return {CampaignWikiPage[]} [description]
   */
  get pages(): CampaignWikiPage[] {
    return this.wikiPages.filter((page) => {
      let category = page.wiki_category;
      return (!this.currentCategory)
        || (category && category.wiki_name === this.currentCategory);
    });
  }

  /**
   * Atualiza dados das listas
   * @return {[type]} [description]
   */
  refresh() {
    if (this.campaign) {
      let params: URLSearchParams = new URLSearchParams();
      params.set('wiki_category', this.currentCategory);
      this.campaignWikiService.listChildren(this.campaign_id, params)
        .subscribe((pages) => this.wikiPages = pages);
    }
  }
}
