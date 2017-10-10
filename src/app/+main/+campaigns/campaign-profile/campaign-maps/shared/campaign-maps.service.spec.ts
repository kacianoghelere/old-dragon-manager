import { TestBed, inject } from '@angular/core/testing';

import { CampaignMapsService } from './campaign-maps.service';

describe('CampaignMapsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignMapsService]
    });
  });

  it('should be created', inject([CampaignMapsService], (service: CampaignMapsService) => {
    expect(service).toBeTruthy();
  }));
});
