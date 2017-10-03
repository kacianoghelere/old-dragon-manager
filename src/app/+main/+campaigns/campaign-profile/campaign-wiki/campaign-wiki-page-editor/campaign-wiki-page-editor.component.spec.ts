import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignWikiPageEditorComponent } from './campaign-wiki-page-editor.component';

describe('CampaignWikiPageEditorComponent', () => {
  let component: CampaignWikiPageEditorComponent;
  let fixture: ComponentFixture<CampaignWikiPageEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignWikiPageEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignWikiPageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
