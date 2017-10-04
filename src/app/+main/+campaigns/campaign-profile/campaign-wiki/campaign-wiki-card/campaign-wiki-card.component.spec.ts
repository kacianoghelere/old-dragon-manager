import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignWikiCardComponent } from './campaign-wiki-card.component';

describe('CampaignWikiCardComponent', () => {
  let component: CampaignWikiCardComponent;
  let fixture: ComponentFixture<CampaignWikiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignWikiCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignWikiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
