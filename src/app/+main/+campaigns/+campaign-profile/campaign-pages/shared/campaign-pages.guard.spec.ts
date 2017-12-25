import { TestBed, async, inject } from '@angular/core/testing';

import { CampaignPagesGuard } from './campaign-pages.guard';

describe('CampaignPagesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignPagesGuard]
    });
  });

  it('should ...', inject([CampaignPagesGuard], (guard: CampaignPagesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
