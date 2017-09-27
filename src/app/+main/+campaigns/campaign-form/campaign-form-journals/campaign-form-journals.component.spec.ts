import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignJournalsComponent } from './campaign-journals.component';

describe('CampaignJournalsComponent', () => {
  let component: CampaignJournalsComponent;
  let fixture: ComponentFixture<CampaignJournalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignJournalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
