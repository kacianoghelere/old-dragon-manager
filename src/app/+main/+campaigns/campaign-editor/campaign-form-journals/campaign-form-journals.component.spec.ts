import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignFormJournalsComponent } from './campaign-form-journals.component';

describe('CampaignFormJournalsComponent', () => {
  let component: CampaignFormJournalsComponent;
  let fixture: ComponentFixture<CampaignFormJournalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignFormJournalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignFormJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
