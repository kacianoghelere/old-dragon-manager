import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignFormNoteComponent } from './campaign-form-note.component';

describe('CampaignFormNoteComponent', () => {
  let component: CampaignFormNoteComponent;
  let fixture: ComponentFixture<CampaignFormNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignFormNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignFormNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
