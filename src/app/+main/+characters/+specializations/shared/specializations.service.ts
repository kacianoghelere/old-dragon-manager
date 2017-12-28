import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { EntityService } from '../../../../shared/services/entity.service';
import { CharacterSpecialization } from '../../../../shared/entities/character-specialization';

@Injectable()
export class SpecializationsService extends EntityService<CharacterSpecialization> {

  resource: string = "character_specializations";

  constructor(auth: AuthenticationService, http: Http) {
    super(auth, http);
  }

  belongToCurrentUser(specialization: CharacterSpecialization): boolean {
    return this.authenticationService.isCurrentUser(specialization.user);
  }

  /**
   * Verifica se o usuário atual é o criador da especialização para ativar rotas
   * @param  {number}              id ID da especialização
   * @return {Observable<boolean>}    Observavel de resultado
   */
  canActivateOwner(id: number): Observable<boolean> {
    return this.find(id).map((campaign) => {
      return true;
      // return this.authService.isCurrentUser(campaign.dungeonMaster);
    });
  }

  /**
   * [create description]
   * @param  {CharacterSpecialization}              params [description]
   * @return {Observable<CharacterSpecialization>}         [description]
   */
  create(params: CharacterSpecialization): Observable<CharacterSpecialization> {
    return super._create(this.resource)({character_specialization: params});
  }

  /**
   * [find description]
   * @param  {number}          id [description]
   * @return {Observable<CharacterSpecialization>}    [description]
   */
  find(id: number): Observable<CharacterSpecialization> {
    return super._find(this.resource)(id);
  }

  /**
   * Identifica se o registro deve ser criado ou atualizado e direciona para a
   * função de tratamento correta
   * @param  {CharacterSpecialization}             params Informações do registro
   * @return {Observable<CharacterSpecialization>}        Observavel de retorno
*                                                         do request
   */
  handle(params: CharacterSpecialization): Observable<CharacterSpecialization> {
    if (params.id) {
      return this.update(params.id, params);
    }
    return this.create(params);
  }

  /**
   * [list description]
   * @return {Observable<CharacterSpecialization[]>} [description]
   */
  list(): Observable<CharacterSpecialization[]> {
    return super._list(this.resource)();
  }

  /**
   * [update description]
   * @param  {number}                              id     [description]
   * @param  {CharacterSpecialization}             params [description]
   * @return {Observable<CharacterSpecialization>}        [description]
   */
  update(
    id: number,
    params: CharacterSpecialization
  ): Observable<CharacterSpecialization> {
    return super._update(this.resource)(id, {character_specialization: params});
  }
}
