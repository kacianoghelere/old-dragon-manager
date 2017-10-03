import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignWikiComponent } from './campaign-wiki.component';

describe('CampaignWikiComponent', () => {
  let component: CampaignWikiComponent;
  let fixture: ComponentFixture<CampaignWikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignWikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
