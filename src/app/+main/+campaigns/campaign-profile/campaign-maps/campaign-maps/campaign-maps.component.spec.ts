import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignMapsComponent } from './campaign-maps.component';

describe('CampaignMapsComponent', () => {
  let component: CampaignMapsComponent;
  let fixture: ComponentFixture<CampaignMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
