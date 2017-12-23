import { TestBed, inject } from '@angular/core/testing';

import { CampaignInvitationService } from './campaign-invitation.service';

describe('CampaignInvitationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignInvitationService]
    });
  });

  it('should be created', inject([CampaignInvitationService], (service: CampaignInvitationService) => {
    expect(service).toBeTruthy();
  }));
});
