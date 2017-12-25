import { TestBed, async, inject } from '@angular/core/testing';

import { CampaignOwnerGuard } from './campaign-owner.guard';

describe('CampaignOwnerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignOwnerGuard]
    });
  });

  it('should ...', inject([CampaignOwnerGuard], (guard: CampaignOwnerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
