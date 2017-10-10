import { TestBed, async, inject } from '@angular/core/testing';

import { CampaignWikiPageGuard } from './campaign-wiki-page.guard';

describe('CampaignWikiPageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignWikiPageGuard]
    });
  });

  it('should ...', inject([CampaignWikiPageGuard], (guard: CampaignWikiPageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
