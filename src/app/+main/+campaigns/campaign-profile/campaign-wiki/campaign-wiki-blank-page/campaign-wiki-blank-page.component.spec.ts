import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignWikiBlankPageComponent } from './campaign-wiki-blank-page.component';

describe('CampaignWikiBlankPageComponent', () => {
  let component: CampaignWikiBlankPageComponent;
  let fixture: ComponentFixture<CampaignWikiBlankPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignWikiBlankPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignWikiBlankPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
