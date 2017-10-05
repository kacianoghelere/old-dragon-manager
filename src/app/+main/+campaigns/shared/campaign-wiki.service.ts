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
    // -------------------------------------------------------------------------
    this.markdownService.renderer.blockquote = (quote: string) => {
      return `<blockquote class="blockquote">${quote}</blockquote>`;
    };

    // -------------------------------------------------------------------------
    let oldCode = this.markdownService.renderer.code;
    let newCode = (code: string, lang: string, escaped: boolean): string => {
      if (lang !== 'dm-content') return oldCode(code, lang, escaped);
      return `<code><b>Nota do Narrador:</b> ${code}</code>`;
    };
    this.markdownService.renderer.code = newCode;

    // -------------------------------------------------------------------------
    this.markdownService.renderer.heading = (text, level, raw) => {
      let id: string = this.cleanSpecialChars(raw).toLowerCase();
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    };

    // -------------------------------------------------------------------------

    this.markdownService.renderer.link = this.customLinkRenderer;

    // -------------------------------------------------------------------------
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
   * Renderer customizado de markdown para links
   * @param  {string} href  Destino do link
   * @param  {string} title Título da tag
   * @param  {string} text  Texto da tag
   * @return {string}       Tag formatada
   */
  customLinkRenderer(href: string, title: string, text: string): string {
    let wikiRegex = /^\s*\[\[[\sa-zA-Z0-9]+\]\]\s*/g;
    let anchorRegex = /^\s*\[[\sa-z0-9]+\]\s*/g;
    // console.log("Converting", {href: href, title: title, text: text});
    if (wikiRegex.test(href)) {
      href = href.replace(/[\[\]]/g, '');
      let wiki: string = href.trim().toLowerCase().replace(/\s/g, '_');
      console.log("Wiki Regex passes");
      return `<a [routerLink]="['../${wiki}']" title="${title}">${text}</a>`;
    } else if (anchorRegex.test(href)) {
      href = href.replace(/[\[\]]/g, '');
      let id: string = href.trim().toLowerCase().replace(/\s/g, '_');
      console.log("Anchor Regex passes");
      return `<a routerLink="./" fragment="${id}" title="${title}">${text}</a>`;
    } else {
      // console.log("Regex rejected");
      return `<a href="${href}" title="${title}">${text}</a>`;
    }
  }

  /**
   * Substitui caractéres especiais do texto por valores ACII
   * @param  {string} text Texto original
   * @return {string}      Texto ASCII
   */
  cleanSpecialChars(text: string) {
    text = text.replace(/[ÀÁÂÃÄÅ]/g, 'A');
    text = text.replace(/[àáâãäå]/g, 'a');
    text = text.replace(/[ÈÉÊË]/g, 'E');
    text = text.replace(/[èéêë]/g, 'e');
    text = text.replace(/[ÍÌÏÎĨ]/g, 'I');
    text = text.replace(/[íìïîĩ]/g, 'i');
    text = text.replace(/[ÒÓÔÕÖ]/g, 'O');
    text = text.replace(/[òóôõö]/g, 'o');
    text = text.replace(/[ÙÚÛÜ]/g, 'U');
    text = text.replace(/[ùúûü]/g, 'u');
    text = text.replace(/[Ñ]/g, 'N');
    text = text.replace(/[ñ]/g, 'n');
    text = text.replace(/[ÝŸ]/g, 'Y');
    text = text.replace(/[ýÿ]/g, 'y');
    text = text.replace(/[Ç]/g, 'C');
    text = text.replace(/[ç]/g, 'c');
    text = text.replace(/\s/g, '_');
    return text.replace(/[^a-z0-9]/gi, ''); // final clean up
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
