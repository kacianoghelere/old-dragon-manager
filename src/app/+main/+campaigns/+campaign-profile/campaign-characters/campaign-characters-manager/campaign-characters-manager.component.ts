import { Subscription } from 'rxjs/Subscription';

import { ChangeDetectorRef, Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign, Character } from '../../../../../shared/models';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CampaignCharactersService } from '../shared/campaign-characters.service';

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
    private changeDetectorRef: ChangeDetectorRef,
    private toastrService: ToastrService
  ) {
  }

  /**
   * Executa rota de navegação de retorno
   */
  goBack() {
    this.router.navigate(['/main/campaigns', this.campaign_id, 'characters']);
  }

  ngOnInit() {
    this.route.parent.parent.parent.params.subscribe((params) => {
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

  onSubmit({value, valid}: {value: any, valid: boolean}) {
    console.log("Submetido!", value);
    let params = value.characters;
    this.charactersService.createChild(this.campaign_id, params).subscribe(
      (response: any) => {
        this.toastrService.success(
          'Os dados da página foram gravados com sucesso.',
          'Operação concluída'
        );
        this.goBack();
      },
      (error) => {
        console.log("Deu PT!", error);
        this.toastrService.warning(
          'Parace que algum kobold andou mexendo nos cabos de rede.',
          'Ooops! Ocorreu um erro.'
        );
      }
    );
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
      id: this.campaign_id,
      characters: new FormArray([])
    });
  }
}
