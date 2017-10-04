import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { MarkdownService } from 'angular2-markdown';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { EntityService } from '../../../shared/services/entity.service';
import { Campaign } from '../../../shared/entities/campaign';
import { CampaignWikiPage } from '../../../shared/entities/campaign-wiki-page';

@Injectable()
export class CampaignWikiService extends EntityService<CampaignWikiPage> {

  resource: string = 'pages';

  constructor(
    authService: AuthenticationService,
    http: Http,
    private markdownService: MarkdownService
  ) {
    super(authService, http);
    this.markdownService.renderer.link = (href: string, title: string, text: string) => {
      let regex = /^\s*\[\[[\sa-zA-Z0-9]+\]\]\s*/g;
      // console.log("Converting", {href: href, title: title, text: text});
      if (regex.test(href)) {
        href = href.replace(/[\[\]]/g, '');
        let wiki: string = href.trim().toLowerCase().replace(/\s/g, '_');
        // console.log("Regex passes");
        return `<a [routerLink]="['../${wiki}']" title="${title}">${text}</a>`;
      } else {
        // console.log("Regex rejected");
        return `<a href="${href}" title="${title}">${text}</a>`;
      }
    }
  }

  compileText(text: string) {
    return this.markdownService.compile(text);
  }

  /**
   * [create description]
   * @param  {CampaignWikiPage}               params [description]
   * @return {Observable<CampaignWikiPage[]>}        [description]
   */
  create(params: CampaignWikiPage): Observable<any> {
    return super._create(this.resource)({campaign: params});
  }

  /**
   * [findChild description]
   * @param  {number}                       campaign_id [description]
   * @param  {string}                       page        [description]
   * @return {Observable<CampaignWikiPage>}             [description]
   */
  findChild(campaign_id: number, page: string): Observable<CampaignWikiPage> {
    return super._findChildren('campaigns', this.resource)(campaign_id, page);
  }

  /**
   * Identifica se o registro deve ser criado ou atualizado e direciona para a
   * função de tratamento correta
   * @param  {any}             params Informações do registro
   * @return {Observable<any>}        Observavel de retorno do request
   */
  handle(params: any): Observable<any> {
    if (params.id) {
      return this.update(params.id, params);
    }
    return this.create(params);
  }

  /**
   * [list description]
   * @return {Observable<any>} [description]
   */
  listChildren(campaign_id: number): Observable<CampaignWikiPage[]> {
    return super._custom('campaigns', this.resource)(campaign_id);
  }

  update(id: number, params: CampaignWikiPage): Observable<any> {
    return super._update(this.resource)(id, {campaign: params});
  }
}
