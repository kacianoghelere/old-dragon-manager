import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignWikiPageComponent } from './campaign-wiki-page.component';

describe('CampaignWikiPageComponent', () => {
  let component: CampaignWikiPageComponent;
  let fixture: ComponentFixture<CampaignWikiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignWikiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignWikiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
