import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignNoteEditorComponent } from './campaign-note-editor.component';

describe('CampaignNoteEditorComponent', () => {
  let component: CampaignNoteEditorComponent;
  let fixture: ComponentFixture<CampaignNoteEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignNoteEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignNoteEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
