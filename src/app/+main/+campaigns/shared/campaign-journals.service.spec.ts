import { TestBed, inject } from '@angular/core/testing';

import { CampaignJournalsService } from './campaign-journals.service';

describe('CampaignJournalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignJournalsService]
    });
  });

  it('should be created', inject([CampaignJournalsService], (service: CampaignJournalsService) => {
    expect(service).toBeTruthy();
  }));
});
