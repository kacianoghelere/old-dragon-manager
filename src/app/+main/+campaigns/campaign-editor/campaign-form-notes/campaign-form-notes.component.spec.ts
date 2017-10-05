import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignFormNotesComponent } from './campaign-form-notes.component';

describe('CampaignFormNotesComponent', () => {
  let component: CampaignFormNotesComponent;
  let fixture: ComponentFixture<CampaignFormNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignFormNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignFormNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
