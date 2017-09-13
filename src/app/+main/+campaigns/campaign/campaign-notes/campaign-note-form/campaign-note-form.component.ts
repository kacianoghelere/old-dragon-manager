import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignNote } from '../../../../../shared/entities/campaign-note';
import { CampaignService } from "../../shared/campaign.service";

@Component({
  selector: 'campaign-note-form',
  templateUrl: './campaign-note-form.component.html',
  styleUrls: ['./campaign-note-form.component.scss']
})
export class CampaignNoteFormComponent implements OnInit {

  @Input('note') note: CampaignNote;
  @Input('notes') notes: FormArray;
  @Output('removeNote') removeNote: EventEmitter<CampaignNote>;
  private noteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private campaignService: CampaignService
  ) {
    this.removeNote = new EventEmitter();
  }

  ngOnInit() {
    this.noteForm = this.toFormGroup(this.note);
    this.notes.push(this.noteForm);
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
    this.removeNote.emit(this.note);
  }

  /**
   * Generates a new FormGroup form the current note
   * @param  {CampaignNote} note Campaign note entity
   * @return {FormGroup}         The new FormGroup
   */
  toFormGroup(note: CampaignNote): FormGroup {
    return this.formBuilder.group({
      id: [ note.id ],
      description: [ note.description || '', Validators.required ],
      dm_only: [ note.dm_only ]
    });
  }
}
