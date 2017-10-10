import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignNote } from '../../../../../shared/entities/campaign-note';
import { CampaignNotesService } from '../shared/campaign-notes.service';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CoreComponent } from '../../../../../shared/components/core/core.component';

@Component({
  selector: 'campaign-note-editor',
  templateUrl: './campaign-note-editor.component.html',
  styleUrls: ['./campaign-note-editor.component.scss']
})
export class CampaignNoteEditorComponent extends CoreComponent
    implements OnInit {

  private campaign: Campaign;
  private campaign_id: number;
  private note_id: number;
  private note: CampaignNote;
  private noteForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private formBuilder: FormBuilder,
    private notesService: CampaignNotesService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {
    super();
  }

  /**
   * Verifica se a página pode ser destruída
   * @return {boolean} Resultado da verificação
   */
  canDestroy() {
    return this.isCampaignOwner() && !!(this.note.id);
  }

  /**
   * Executa destruição de nota de campanha
   */
  destroyNote(): void {
    this.notesService.destroyChild(this.campaign_id, this.note_id)
      .subscribe((response) => {
        console.log("Deletou!", response);
        this.note = null;
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
      });
  }

  /**
   * Executa rota de navegação de retorno
   */
  goBack() {
    this.router.navigate(['/main/campaigns', this.campaign_id, 'notes']);
  }

  /**
   * Verifica se o usuário atual é o mestre de jogo da campanha
   * @return {boolean} Resultado da verificação
   */
  isCampaignOwner(): boolean {
    return this.authService.isCurrentUser(this.campaign.dungeonMaster);
  }

  ngOnInit() {
    this.route.parent.parent.parent.params.subscribe((campaignParams) => {
      this.campaign_id = campaignParams['campaign_id'];
      // console.log(params);
      if (this.campaign_id) {
        this.campaignsService.find(this.campaign_id).subscribe((campaign) => {
          this.campaign = campaign;
          this.route.params.subscribe((noteParams) => {
            this.note_id = noteParams['note_id'];
            if (this.note_id) {
              this.notesService.findChild(this.campaign_id, this.note_id)
              .subscribe((note) => {
                this.note = note;
                this.noteForm = this.toFormGroup(this.note);
              });
            } else {
              this.note = {
                id: null,
                description: '',
                active: true,
                dm_only: false
              };
              this.noteForm = this.toFormGroup(this.note);
            }
          });
        });
      }
    });
  }

  onSubmit({value, valid}: {value: any, valid: boolean}) {
    console.log("Submetido!", value);
    let params: any = {
      id: value.id,
      active: value.active,
      dm_only: value.dm_only,
      description: value.description,
      campaign_id: this.campaign_id
    };
    this.notesService.handle(params).subscribe(
      (response: CampaignNote) => {
        // console.log("Salvou!", response);
        if (!this.note.id) {
          this.note.id = response.id;
        }
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
   * Cria um novo FormGroup para a nota de campanha
   * @param  {CampaignNote} note Nota de campanha
   * @return {FormGroup}         Novo FormGroup
   */
  toFormGroup(note: CampaignNote): FormGroup {
    return this.formBuilder.group({
      id: note.id,
      description: [ note.description || '', Validators.required ],
      dm_only: [ note.dm_only ],
      active: [ note.active ]
    });
  }
}
