import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { CampaignNote } from '../../../../../../shared/entities/campaign-note';

@Component({
  selector: 'campaign-form-note',
  templateUrl: './campaign-form-note.component.html',
  styleUrls: ['./campaign-form-note.component.scss']
})
export class CampaignFormNoteComponent implements OnInit {

  @Input('note') note: CampaignNote;
  @Input('notes') notes: FormArray;
  @Output('removeNote') removeNote: EventEmitter<CampaignNote>;
  private noteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.removeNote = new EventEmitter();
  }

  ngOnInit() {
    this.noteForm = this.toFormGroup(this.note);
    this.notes.push(this.noteForm);
  }

  /**
   * Emite evento de remoção
   */
  remove() {
    this.removeNote.emit(this.note);
  }

  /**
   * Cria um novo FormGroup para a nota de campanha
   * @param  {CampaignNote} note Nota de campanha
   * @return {FormGroup}         Novo FormGroup
   */
  toFormGroup(note: CampaignNote): FormGroup {
    return this.formBuilder.group({
      description: [ note.description || '', Validators.required ],
      dm_only: [ note.dm_only ]
    });
  }
}
