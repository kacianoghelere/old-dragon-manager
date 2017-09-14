import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignJournalFormComponent } from './campaign-journal-form.component';

describe('CampaignJournalFormComponent', () => {
  let component: CampaignJournalFormComponent;
  let fixture: ComponentFixture<CampaignJournalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignJournalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignJournalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
