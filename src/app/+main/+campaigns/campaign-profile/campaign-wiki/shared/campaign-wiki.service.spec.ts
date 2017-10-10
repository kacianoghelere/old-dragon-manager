import { TestBed, inject } from '@angular/core/testing';

import { CampaignWikiService } from './campaign-wiki.service';

describe('CampaignWikiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignWikiService]
    });
  });

  it('should be created', inject([CampaignWikiService], (service: CampaignWikiService) => {
    expect(service).toBeTruthy();
  }));
});
