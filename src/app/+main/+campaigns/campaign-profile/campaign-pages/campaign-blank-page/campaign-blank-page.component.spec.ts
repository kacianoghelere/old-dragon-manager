import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignBlankPageComponent } from './campaign-blank-page.component';

describe('CampaignBlankPageComponent', () => {
  let component: CampaignBlankPageComponent;
  let fixture: ComponentFixture<CampaignBlankPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignBlankPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignBlankPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
