import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignJournalEditorComponent } from './campaign-journal-editor.component';

describe('CampaignJournalEditorComponent', () => {
  let component: CampaignJournalEditorComponent;
  let fixture: ComponentFixture<CampaignJournalEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignJournalEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignJournalEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
