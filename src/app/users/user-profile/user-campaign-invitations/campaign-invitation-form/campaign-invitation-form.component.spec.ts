import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignInvitationFormComponent } from './campaign-invitation-form.component';

describe('CampaignInvitationFormComponent', () => {
  let component: CampaignInvitationFormComponent;
  let fixture: ComponentFixture<CampaignInvitationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignInvitationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignInvitationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
