import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPageEditorComponent } from './campaign-page-editor.component';

describe('CampaignPageEditorComponent', () => {
  let component: CampaignPageEditorComponent;
  let fixture: ComponentFixture<CampaignPageEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignPageEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignPageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
