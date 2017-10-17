import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPageCardComponent } from './campaign-page-card.component';

describe('CampaignPageCardComponent', () => {
  let component: CampaignPageCardComponent;
  let fixture: ComponentFixture<CampaignPageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignPageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
