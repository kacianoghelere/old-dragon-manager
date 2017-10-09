import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignMapEditorComponent } from './campaign-map-editor.component';

describe('CampaignMapEditorComponent', () => {
  let component: CampaignMapEditorComponent;
  let fixture: ComponentFixture<CampaignMapEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignMapEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignMapEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
