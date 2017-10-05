import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignFormJournalComponent } from './campaign-form-journal.component';

describe('CampaignFormJournalComponent', () => {
  let component: CampaignFormJournalComponent;
  let fixture: ComponentFixture<CampaignFormJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignFormJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignFormJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
