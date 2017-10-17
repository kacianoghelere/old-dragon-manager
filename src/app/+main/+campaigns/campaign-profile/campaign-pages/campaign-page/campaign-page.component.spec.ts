import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPageComponent } from './campaign-page.component';

describe('CampaignPageComponent', () => {
  let component: CampaignPageComponent;
  let fixture: ComponentFixture<CampaignPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
