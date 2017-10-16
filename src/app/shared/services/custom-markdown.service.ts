import { Injectable } from '@angular/core';

@Injectable()
export class CustomMarkdownService {

  constructor() { }

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
   * Renderer customizado de markdown para citações
   * @param  {string} quote [description]
   * @return {string}       Tag formatada
   */
  customBlockquoteRenderer(quote: string) {
    return `<blockquote class="blockquote">${quote}</blockquote>`;
  }

  /**
   * Renderer customizado de markdown para títulos
   * @param  {string} text  Texto do título
   * @param  {number} level Nível do título
   * @param  {string} raw   Conteúdo original
   * @return {string}       Tag formatada
   */
  customHeadingRenderer(text: string, level: number, raw: string) {
    let id: string = this.cleanSpecialChars(raw).toLowerCase();
    return `<h${level} id="${id}">${text}</h${level}>\n`;
  }

  /**
   * Renderer customizado de markdown para tabelas
   * @param  {string} header Cabeçalho da tabela
   * @param  {string} body   Corpo da tabela
   * @return {string}        Tag formatada
   */
  customTableRenderer(header: string, body: string): string {
    return '<table class="table table-sm">\n'
      + '<thead>\n'
      + header
      + '</thead>\n'
      + '<tbody>\n'
      + body
      + '</tbody>\n'
      + '</table>\n';
  }
}
