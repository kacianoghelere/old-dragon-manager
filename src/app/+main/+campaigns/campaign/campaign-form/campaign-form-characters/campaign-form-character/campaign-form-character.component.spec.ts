import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignFormCharacterComponent } from './campaign-form-character.component';

describe('CampaignFormCharacterComponent', () => {
  let component: CampaignFormCharacterComponent;
  let fixture: ComponentFixture<CampaignFormCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignFormCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignFormCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
