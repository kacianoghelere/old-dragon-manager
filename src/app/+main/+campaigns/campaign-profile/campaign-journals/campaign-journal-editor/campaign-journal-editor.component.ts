import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignJournal } from '../../../../../shared/entities/campaign-journal';
import { CampaignJournalsService } from '../../../shared/campaign-journals.service';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CoreComponent } from '../../../../../shared/components/core/core.component';

@Component({
  selector: 'campaign-journal-editor',
  templateUrl: './campaign-journal-editor.component.html',
  styleUrls: ['./campaign-journal-editor.component.scss']
})
export class CampaignJournalEditorComponent extends CoreComponent
    implements OnInit {

  private campaign: Campaign;
  private campaign_id: number;
  private journal_id: number;
  private journal: CampaignJournal;
  private journalForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private formBuilder: FormBuilder,
    private journalsService: CampaignJournalsService,
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
    return this.isCampaignOwner() && !!(this.journal.id);
  }

  /**
   * Executa destruição de diário de campanha
   */
  destroyJournal(): void {
    this.journalsService.destroyChild(this.campaign_id, this.journal_id)
      .subscribe((response) => {
        console.log("Deletou!", response);
        this.journal = null;
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
    this.router.navigate(['/main/campaigns', this.campaign_id, 'journals']);
  }

  /**
   * Verifica se o usuário atual é o mestre de jogo da campanha
   * @return {boolean} Resultado da verificação
   */
  isCampaignOwner(): boolean {
    return this.authService.isCurrentUser(this.campaign.dungeonMaster);
  }

  ngOnInit() {
    this.route.parent.parent.params.subscribe((campaignParams) => {
      this.campaign_id = campaignParams['campaign_id'];
      // console.log(params);
      if (this.campaign_id) {
        this.campaignsService.find(this.campaign_id).subscribe((campaign) => {
          this.campaign = campaign;
          this.route.params.subscribe((journalParams) => {
            this.journal_id = journalParams['journal_id'];
            if (this.journal_id) {
              this.journalsService.findChild(this.campaign_id, this.journal_id)
              .subscribe((journal) => {
                this.journal = journal;
                this.journalForm = this.toFormGroup(this.journal);
              });
            } else {
              this.journal = {
                id: null,
                description: '',
                active: true
              };
              this.journalForm = this.toFormGroup(this.journal);
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
      description: value.description,
      campaign_id: this.campaign_id
    };
    this.journalsService.handle(params).subscribe(
      (response: CampaignJournal) => {
        // console.log("Salvou!", response);
        if (!this.journal.id) {
          this.journal.id = response.id;
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
   * Generates a new FormGroup form the current journal
   * @param  {CampaignJournal} journal Campaign journal entity
   * @return {FormGroup}               The new FormGroup
   */
  toFormGroup(journal: CampaignJournal): FormGroup {
    return this.formBuilder.group({
      id: journal.id,
      description: [ journal.description || '', Validators.required ],
      active: journal.active || true
    });
  }
}
