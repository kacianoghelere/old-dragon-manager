import { ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { CampaignNote } from '../../../../shared/entities/campaign-note';

@Component({
  selector: 'campaign-form-notes',
  templateUrl: './campaign-form-notes.component.html',
  styleUrls: ['./campaign-form-notes.component.scss']
})
export class CampaignFormNotesComponent implements OnInit {

  @Input('campaignForm') campaignForm: FormGroup;
  @Input('notes') notes: CampaignNote[];

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.campaignForm.addControl('notes', new FormArray([]));
  }

  /**
   * Adds a new note in the campaign
   */
  addNote() {
    const child: CampaignNote = {
      description: '',
      dm_only: false
    };
    this.notes.push(child);
    this.changeDetectorRef.detectChanges();
  }

  /**
   * Remove a nota do FormArray
   * @param {CampaignNote} note Campaign note entity
   */
  removeNote(note: CampaignNote) {
    if (this.notes.length) {
      let index = this.notes.indexOf(note);
      if (index >= 0) {
        this.notes.splice(index, 1);
        (<FormArray>this.campaignForm.get('notes')).removeAt(index);
      }
    }
  }
}
