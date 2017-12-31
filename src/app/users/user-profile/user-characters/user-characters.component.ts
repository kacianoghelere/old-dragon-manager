import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Character } from '../../../shared/models';
import { CoreComponent } from '../../../shared/components/core/core.component';
import { UsersService } from '../../users.service';

@Component({
  selector: 'user-characters',
  templateUrl: './user-characters.component.html',
  styleUrls: ['./user-characters.component.scss']
})
export class UserCharactersComponent extends CoreComponent implements OnInit {

  characters: Character[];

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => this.loadCollections(params['id']));
  }

  /**
   * Carrega dados de coleções do usuário a partir do ID recebido
   * @param {number} user_id ID do usuário
   */
  loadCollections(user_id: number) {
    this.usersService.findCharacters(user_id).subscribe(
      (response) => this.characters = response,
      (error) => console.log('Erro ao buscar personagens do usuário')
    );
  }
}
