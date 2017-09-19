import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCampaignInvitationComponent } from './user-campaign-invitation.component';

describe('UserCampaignInvitationComponent', () => {
  let component: UserCampaignInvitationComponent;
  let fixture: ComponentFixture<UserCampaignInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCampaignInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCampaignInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
