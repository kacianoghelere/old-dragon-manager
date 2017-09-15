import { ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignNote } from '../../../../../shared/entities/campaign-note';
import { CampaignFormService } from '../shared/campaign-form.service';

@Component({
  selector: 'campaign-form-notes',
  templateUrl: './campaign-form-notes.component.html',
  styleUrls: ['./campaign-form-notes.component.scss']
})
export class CampaignFormNotesComponent implements OnInit {

  @Input('campaignForm') campaignForm: FormGroup;
  @Input('notes') notes: CampaignNote[];
  private noteForm: FormGroup;
  private enabledEditing: Boolean;

  constructor(
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private campaignService: CampaignFormService
  ) { }

  ngOnInit() {
    this.campaignForm.addControl('notes', new FormArray([]));
    this.campaignService.editingEmitter.subscribe((status) => {
      console.log("Mudou status de edição nas notas", status);
      this.enabledEditing = status.editing;
    });
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
   * Verifica se o usuário atual pode editar a campanha
   * @return {boolean} Resultado da verificação
   */
  canEdit(): boolean {
    return this.campaignService.canEdit();
  }

  filterUndestroyed(collection: any[]): any[] {
    if (!collection || !collection.length) return [];
    return collection.filter((v) => !v._delete);
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
