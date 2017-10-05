import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignJournal } from '../../../../../shared/entities/campaign-journal';
import { CampaignFormService } from '../../shared/campaign-form.service';

@Component({
  selector: 'campaign-form-journal',
  templateUrl: './campaign-form-journal.component.html',
  styleUrls: ['./campaign-form-journal.component.scss']
})
export class CampaignFormJournalComponent implements OnInit {

  @Input('journals') journals: FormArray;
  @Input('journal') journal: CampaignJournal;
  @Output('removeJournal') removeJournal: EventEmitter<CampaignJournal>;
  private journalForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private campaignService: CampaignFormService
  ) {
    this.removeJournal = new EventEmitter();
  }

  ngOnInit() {
    this.journalForm = this.toFormGroup(this.journal);
    this.journals.push(this.journalForm);
  }

  /**
   * Verifica se o usuário atual pode editar a campanha
   * @return {boolean} Resultado da verificação
   */
  canEdit(): boolean {
    return this.campaignService.canEdit();
  }

  /**
   * Emits the removal event
   */
  remove() {
    this.removeJournal.emit(this.journal);
  }

  /**
   * Generates a new FormGroup form the current journal
   * @param  {CampaignJournal} journal Campaign journal entity
   * @return {FormGroup}               The new FormGroup
   */
  toFormGroup(journal: CampaignJournal): FormGroup {
    return this.formBuilder.group({
      description: [ journal.description || '', Validators.required ]
    });
  }
}
