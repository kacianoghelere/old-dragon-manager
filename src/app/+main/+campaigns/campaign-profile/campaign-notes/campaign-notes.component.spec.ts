import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignNotesComponent } from './campaign-notes.component';

describe('CampaignNotesComponent', () => {
  let component: CampaignNotesComponent;
  let fixture: ComponentFixture<CampaignNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
