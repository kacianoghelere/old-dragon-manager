import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignFormMapComponent } from './campaign-form-map.component';

describe('CampaignFormMapComponent', () => {
  let component: CampaignFormMapComponent;
  let fixture: ComponentFixture<CampaignFormMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignFormMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignFormMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
