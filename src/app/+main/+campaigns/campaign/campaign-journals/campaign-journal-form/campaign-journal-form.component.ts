import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignJournal } from '../../../../../shared/entities/campaign-journal';

@Component({
  selector: 'campaign-journal-form',
  templateUrl: './campaign-journal-form.component.html',
  styleUrls: ['./campaign-journal-form.component.scss']
})
export class CampaignJournalFormComponent implements OnInit {

  @Input('journals') journals: FormArray;
  @Input('journal') journal: CampaignJournal;
  @Output('removeJournal') removeJournal: EventEmitter<CampaignJournal>;
  private journalForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.removeJournal = new EventEmitter();
  }

  ngOnInit() {
    this.journalForm = this.toFormGroup(this.journal);
    this.journals.push(this.journalForm);
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
      id: [ journal.id ],
      title: [ journal.title || '', Validators.required ],
      description: [ journal.description || '', Validators.required ],
    });
  }
}
