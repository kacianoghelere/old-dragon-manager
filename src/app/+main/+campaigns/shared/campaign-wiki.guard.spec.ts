import { TestBed, async, inject } from '@angular/core/testing';

import { CampaignWikiGuard } from './campaign-wiki.guard';

describe('CampaignWikiGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignWikiGuard]
    });
  });

  it('should ...', inject([CampaignWikiGuard], (guard: CampaignWikiGuard) => {
    expect(guard).toBeTruthy();
  }));
});
