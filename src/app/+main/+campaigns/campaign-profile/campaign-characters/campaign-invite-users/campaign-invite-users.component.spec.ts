import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignInviteUsersComponent } from './campaign-invite-users.component';

describe('CampaignInviteUsersComponent', () => {
  let component: CampaignInviteUsersComponent;
  let fixture: ComponentFixture<CampaignInviteUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignInviteUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignInviteUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
