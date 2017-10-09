import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCharacterComponent } from './campaign-character.component';

describe('CampaignCharacterComponent', () => {
  let component: CampaignCharacterComponent;
  let fixture: ComponentFixture<CampaignCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
