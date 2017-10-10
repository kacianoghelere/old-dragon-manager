import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignProfileComponent } from './campaign-profile.component';

describe('CampaignProfileComponent', () => {
  let component: CampaignProfileComponent;
  let fixture: ComponentFixture<CampaignProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
