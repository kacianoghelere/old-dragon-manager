import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignMapsListComponent } from './campaign-maps-list.component';

describe('CampaignMapsListComponent', () => {
  let component: CampaignMapsListComponent;
  let fixture: ComponentFixture<CampaignMapsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignMapsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignMapsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
