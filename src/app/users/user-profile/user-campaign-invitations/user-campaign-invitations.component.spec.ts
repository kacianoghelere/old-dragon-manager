import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCampaignInvitationsComponent } from './user-campaign-invitations.component';

describe('UserCampaignInvitationsComponent', () => {
  let component: UserCampaignInvitationsComponent;
  let fixture: ComponentFixture<UserCampaignInvitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCampaignInvitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCampaignInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
