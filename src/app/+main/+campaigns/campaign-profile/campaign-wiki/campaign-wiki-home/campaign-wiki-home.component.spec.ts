import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignWikiHomeComponent } from './campaign-wiki-home.component';

describe('CampaignWikiHomeComponent', () => {
  let component: CampaignWikiHomeComponent;
  let fixture: ComponentFixture<CampaignWikiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignWikiHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignWikiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
