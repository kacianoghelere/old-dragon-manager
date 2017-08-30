import { TestBed, inject } from '@angular/core/testing';

import { CampaignWatcherService } from './campaign-watcher.service';

describe('CampaignWatcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignWatcherService]
    });
  });

  it('should be created', inject([CampaignWatcherService], (service: CampaignWatcherService) => {
    expect(service).toBeTruthy();
  }));
});
