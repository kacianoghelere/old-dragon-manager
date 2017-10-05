import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignFormMapsComponent } from './campaign-form-maps.component';

describe('CampaignFormMapsComponent', () => {
  let component: CampaignFormMapsComponent;
  let fixture: ComponentFixture<CampaignFormMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignFormMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignFormMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
