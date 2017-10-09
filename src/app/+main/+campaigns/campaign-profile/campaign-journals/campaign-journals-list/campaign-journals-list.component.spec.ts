import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignJournalsListComponent } from './campaign-journals-list.component';

describe('CampaignJournalsListComponent', () => {
  let component: CampaignJournalsListComponent;
  let fixture: ComponentFixture<CampaignJournalsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignJournalsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignJournalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
