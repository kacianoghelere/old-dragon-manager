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

  parentResource: string = 'campaigns';
  resource: string = 'pages';

  constructor(
    authService: AuthenticationService,
    http: Http,
    private markdownService: MarkdownService
  ) {
    super(authService, http);
    this.markdownService.renderer.blockquote = (quote: string) => {
      return `<blockquote class="blockquote">${quote}</blockquote>`;
    };
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
    this.markdownService.renderer.table = (header: string, body: string) => {
      return '<table class="table table-sm">\n'
        + '<thead>\n'
        + header
        + '</thead>\n'
        + '<tbody>\n'
        + body
        + '</tbody>\n'
        + '</table>\n';
    };
  }

  /**
   * [compileText description]
   * @param  {string} text [description]
   * @return {[type]}      [description]
   */
  compileText(text: string) {
    return this.markdownService.compile(text);
  }

  /**
   * [create description]
   * @param  {CampaignWikiPage}               params [description]
   * @return {Observable<CampaignWikiPage[]>}        [description]
   */
  createChild(
    campaign_id: number,
    params: any
  ): Observable<any> {
    let _createChild = super._createChild(this.parentResource, this.resource);
    return _createChild(campaign_id, {campaign_wiki_page: params});
  }

  /**
   * [findChild description]
   * @param  {number}                       campaign_id [description]
   * @param  {string}                       page        [description]
   * @return {Observable<CampaignWikiPage>}             [description]
   */
  findChild(campaign_id: number, page: string): Observable<CampaignWikiPage> {
    return super._findChildren(this.parentResource, this.resource)(campaign_id, page);
  }

  /**
   * Identifica se o registro deve ser criado ou atualizado e direciona para a
   * função de tratamento correta
   * @param  {any}             params Informações do registro
   * @return {Observable<any>}        Observavel de retorno do request
   */
  handle(params: any): Observable<any> {
    if (params.id) {
      return this.updateChild(params.campaign_id, params.id, params);
    }
    return this.createChild(params.campaign_id, params);
  }

  /**
   * [listChildren description]
   * @param  {number}                         campaign_id [description]
   * @return {Observable<CampaignWikiPage[]>}             [description]
   */
  listChildren(campaign_id: number): Observable<CampaignWikiPage[]> {
    return super._custom(this.parentResource, this.resource)(campaign_id);
  }

  /**
   * [updateChild description]
   * @param  {number}          campaign_id [description]
   * @param  {number}          page_id     [description]
   * @param  {any}             params      [description]
   * @return {Observable<any>}             [description]
   */
  updateChild(
    campaign_id: number,
    page_id: number,
    params: any
  ): Observable<any> {
    let updateChild = super._updateChild(this.parentResource, this.resource);
    return updateChild(campaign_id, page_id, {campaign_wiki_page: params});
  }
}
