import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { MarkdownService } from 'angular2-markdown';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { EntityService } from '../../../../../shared/services/entity.service';
import { CustomMarkdownService } from '../../../../../shared/services/custom-markdown.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignPage } from '../../../../../shared/entities/campaign-page';

@Injectable()
export class CampaignPagesService extends EntityService<CampaignPage> {

  parentResource: string = 'campaigns';
  resource: string = 'pages';

  constructor(
    authService: AuthenticationService,
    http: Http,
    private markdown: MarkdownService,
    private customMarkdown: CustomMarkdownService
  ) {
    super(authService, http);

    // -------------------------------------------------------------------------
    let oldCode = this.markdown.renderer.code;
    let newCode = (code: string, lang: string, escaped: boolean): string => {
      if (lang !== 'dm-content') return oldCode(code, lang, escaped);
      return `<code class="dm-content"><b>Nota do Narrador:</b> ${code}</code>`;
    };
    this.markdown.renderer.code = newCode;

    // -------------------------------------------------------------------------

    this.markdown.renderer.blockquote = this.customMarkdown.customBlockquoteRenderer;
    this.markdown.renderer.heading= this.customMarkdown.customHeadingRenderer;
    this.markdown.renderer.link = this.customLinkRenderer;
    this.markdown.renderer.table = this.customMarkdown.customTableRenderer;
  }

  /**
   * Compila o texto em formato markdown
   * @param  {string}  text              Texto original
   * @param  {boolean} is_dungeon_master Flag de identificação de DM
   *                                     Se não for, remove conteúdo exclusivo
   * @return {string}                    String formatada
   */
  compileText(text: string, is_dungeon_master: boolean = true): string {
    if (!is_dungeon_master) { /* Remove conteúdo de DM quando não tem acesso */
      let regex = /\`\`\`dm\-content\n(.*?)\n\`\`\`/g;
      text = text.replace(regex, '');
    }
    return this.markdown.compile(text);
  }

  /**
   * [createChild description]
   * @param  {number}          campaign_id [description]
   * @param  {any}             params      [description]
   * @return {Observable<any>}             [description]
   */
  createChild(
    campaign_id: number,
    params: any
  ): Observable<any> {
    let _createChild = super._createChild(this.parentResource, this.resource);
    return _createChild(campaign_id, {campaign_page: params});
  }

  /**
   * Renderer customizado de markdown para links
   * @param  {string} href  Destino do link
   * @param  {string} title Título da tag
   * @param  {string} text  Texto da tag
   * @return {string}       Tag formatada
   */
  customLinkRenderer(href: string, title: string, text: string): string {
    let pageRegex = /^\s*\[\[[\sa-zA-Z0-9]+\]\]\s*/g;
    let anchorRegex = /^\s*\[[\sa-z0-9]+\]\s*/g;
    // console.log("Converting", {href: href, title: title, text: text});
    if (pageRegex.test(href)) {
      href = href.replace(/[\[\]]/g, '');
      let page: string = href.trim().toLowerCase().replace(/\s/g, '_');
      console.log("Page Regex passes");
      return `<a [routerLink]="['../${page}']" title="${title}">${text}</a>`;
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
   * Entity removal function
   * @param  {number}          id Entity identification
   * @return {Observable<any>}    Observavel do request
   */
  destroyChild(campaign_id: number, page: string): Observable<any> {
    let destroyChild = super._destroyChild(this.parentResource, this.resource);
    return destroyChild(campaign_id, page);
  }

  /**
   * [findChild description]
   * @param  {number}                       campaign_id [description]
   * @param  {string}                       page        [description]
   * @return {Observable<CampaignPage>}             [description]
   */
  findChild(campaign_id: number, page: string): Observable<CampaignPage> {
    let findChildren = super._findChildren(this.parentResource, this.resource);
    return findChildren(campaign_id, page);
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
   * @param  {URLSearchParams}                params      [description]
   * @return {Observable<CampaignPage[]>}             [description]
   */
  listChildren(
    campaign_id: number,
    params?: URLSearchParams
  ): Observable<CampaignPage[]> {
    let custom = super._custom(this.parentResource, this.resource);
    return custom(campaign_id, params);
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
    return updateChild(campaign_id, page_id, {campaign_page: params});
  }
}
