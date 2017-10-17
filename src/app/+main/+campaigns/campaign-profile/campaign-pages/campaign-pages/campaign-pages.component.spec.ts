import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPagesComponent } from './campaign-pages.component';

describe('CampaignPagesComponent', () => {
  let component: CampaignPagesComponent;
  let fixture: ComponentFixture<CampaignPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
