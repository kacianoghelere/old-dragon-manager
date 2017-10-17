import { TestBed, async, inject } from '@angular/core/testing';

import { CampaignPageGuard } from './campaign-page.guard';

describe('CampaignPageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignPageGuard]
    });
  });

  it('should ...', inject([CampaignPageGuard], (guard: CampaignPageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
