import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignNoteFormComponent } from './campaign-note-form.component';

describe('CampaignNoteFormComponent', () => {
  let component: CampaignNoteFormComponent;
  let fixture: ComponentFixture<CampaignNoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignNoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignNoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
