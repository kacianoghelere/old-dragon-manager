import { TestBed, async, inject } from '@angular/core/testing';

import { CampaignGuard } from './campaign.guard';

describe('CampaignGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignGuard]
    });
  });

  it('should ...', inject([CampaignGuard], (guard: CampaignGuard) => {
    expect(guard).toBeTruthy();
  }));
});
