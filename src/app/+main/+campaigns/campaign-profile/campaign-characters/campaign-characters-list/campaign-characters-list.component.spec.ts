import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCharactersListComponent } from './campaign-characters-list.component';

describe('CampaignCharactersListComponent', () => {
  let component: CampaignCharactersListComponent;
  let fixture: ComponentFixture<CampaignCharactersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignCharactersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignCharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
