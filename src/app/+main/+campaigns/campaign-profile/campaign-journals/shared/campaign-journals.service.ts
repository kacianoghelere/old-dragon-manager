import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { MarkdownService } from 'angular2-markdown';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { EntityService } from '../../../../../shared/services/entity.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignJournal } from '../../../../../shared/entities/campaign-journal';
import { CustomMarkdownService } from '../../../../../shared/services/custom-markdown.service';

@Injectable()
export class CampaignJournalsService extends EntityService<CampaignJournal> {

  parentResource: string = 'campaigns';
  resource: string = 'journals';

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
   * Cria diário de campanha
   * @param  {number}     campaign_id ID da campanha
   * @param  {any}        params      Parâmetros de criação do diário
   * @return {Observable}             Observavel de retorno do request
   */
  createChild(
    campaign_id: number,
    params: any
  ): Observable<any> {
    let _createChild = super._createChild(this.parentResource, this.resource);
    return _createChild(campaign_id, {campaign_journal: params});
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
      console.log("Jounal -> Wiki Regex => passes");
      return `<a routerLink="../wiki/${wiki}" title="${title}">${text}</a>`;
    } else {
      console.log("Jounal -> Wiki Regex => rejected");
      return `<a href="${href}" title="${title}">${text}</a>`;
    }
  }

  /**
   * Destrói diário de campanha
   * @param  {number}     campaign_id ID da campanha
   * @param  {number}     journal_id  ID do diário de campanha
   * @return {Observable}             Observavel de retorno do request
   */
  destroyChild(campaign_id: number, journal_id: number): Observable<any> {
    let destroyChild = super._destroyChild(this.parentResource, this.resource);
    return destroyChild(campaign_id, journal_id);
  }

  /**
   * Busca diário de campanha
   * @param  {number}     campaign_id ID da campanha
   * @param  {number}     journal_id  ID do diário de campanha
   * @return {Observable}             Observavel de retorno do request
   */
  findChild(campaign_id: number, journal_id: number): Observable<CampaignJournal> {
    let findChildren = super._findChildren(this.parentResource, this.resource);
    return findChildren(campaign_id, journal_id);
  }

  /**
   * Identifica se o registro deve ser criado ou atualizado e direciona para a
   * função de tratamento correta
   * @param  {any}        params Informações do registro
   * @return {Observable}        Observavel de retorno do request
   */
  handle(params: any): Observable<any> {
    if (params.id) {
      return this.updateChild(params.campaign_id, params.id, params);
    }
    return this.createChild(params.campaign_id, params);
  }

  /**
   * Busca diários de campanha
   * @param  {number}          campaign_id ID da campanha
   * @param  {URLSearchParams} params      Parâmetros de busca
   * @return {Observable}                  Observavel de retorno do request
   */
  listChildren(
    campaign_id: number,
    params?: URLSearchParams
  ): Observable<CampaignJournal[]> {
    let custom = super._custom(this.parentResource, this.resource);
    return custom(campaign_id, params);
  }

  /**
   * Atualiza diário de campanha
   * @param  {number}     campaign_id ID da campanha
   * @param  {number}     journal_id  ID do diário de campanha
   * @param  {any}        params      Parâmetros de atualização do diário
   * @return {Observable}             Observavel de retorno do request
   */
  updateChild(
    campaign_id: number,
    journal_id: number,
    params: any
  ): Observable<any> {
    let updateChild = super._updateChild(this.parentResource, this.resource);
    return updateChild(campaign_id, journal_id, {campaign_journal: params});
  }

}
