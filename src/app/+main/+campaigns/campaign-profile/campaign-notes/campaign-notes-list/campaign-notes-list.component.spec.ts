import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignNotesListComponent } from './campaign-notes-list.component';

describe('CampaignNotesListComponent', () => {
  let component: CampaignNotesListComponent;
  let fixture: ComponentFixture<CampaignNotesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignNotesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignNotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
