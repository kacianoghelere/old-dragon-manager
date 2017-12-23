import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCharactersManagerComponent } from './campaign-characters-manager.component';

describe('CampaignCharactersManagerComponent', () => {
  let component: CampaignCharactersManagerComponent;
  let fixture: ComponentFixture<CampaignCharactersManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignCharactersManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignCharactersManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
