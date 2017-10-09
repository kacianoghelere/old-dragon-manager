import { Subscription } from 'rxjs/Subscription';

import { ChangeDetectorRef, Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CampaignCharactersService } from '../../../shared/campaign-characters.service';
import { Character } from '../../../../../shared/entities/character';

@Component({
  selector: 'campaign-characters-manager',
  templateUrl: './campaign-characters-manager.component.html',
  styleUrls: ['./campaign-characters-manager.component.scss']
})
export class CampaignCharactersManagerComponent implements OnInit {

  private campaign: Campaign;
  private campaign_id: number;
  private characters: Character[];
  private charactersForm: FormGroup;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private charactersService: CampaignCharactersService,
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  /**
   * Executa rota de navegação de retorno
   */
  goBack() {
    this.router.navigate(['/main/campaigns', this.campaign_id, 'journals']);
  }

  ngOnInit() {
    this.route.parent.parent.params.subscribe((params) => {
      this.campaign_id = params['campaign_id'];
      if (this.campaign_id) {
        this.subscription = this.campaignsService.find(this.campaign_id)
          .subscribe((campaign) => {
            this.campaign = campaign;
            this.charactersService.listChildren(this.campaign_id)
              .subscribe((characters) => {
                this.characters = characters;
                this.charactersForm = this.toFormGroup(this.campaign);
              });
          });
      }
    });
  }

  /**
   * Adiciona personagem no FormArray
   * @param {Character} character Objeto do personagem
   */
  appendCharacter(character: Character) {
    let control: FormControl = new FormControl(character.id);
    (<FormArray>this.charactersForm.get('characters')).push(control);
  }

  /**
   * Remove personagem do FormArray
   * @param {Character} character Objeto do personagem
   */
  removeCharacter(character: Character) {
    if (this.characters.length) {
      let index = this.characters.indexOf(character);
      if (index >= 0) {
        this.characters.splice(index, 1);
        (<FormArray>this.charactersForm.get('characters')).removeAt(index);
        this.changeDetectorRef.detectChanges();
      }
    }
  }

  /**
   * Cria um novo FormGroup para a lista de personagens
   * @param  {Campaign} campaign Campanha
   * @return {FormGroup}         Novo FormGroup
   */
  toFormGroup(campaign: Campaign): FormGroup {
    return this.formBuilder.group({
      characters: new FormArray([])
    });
  }
}
