import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCampaignsComponent } from './character-campaigns.component';

describe('CharacterCampaignsComponent', () => {
  let component: CharacterCampaignsComponent;
  let fixture: ComponentFixture<CharacterCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
