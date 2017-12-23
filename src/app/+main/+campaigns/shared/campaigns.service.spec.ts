import { TestBed, inject } from '@angular/core/testing';

import { CampaignsService } from './campaigns.service';

describe('CampaignsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignsService]
    });
  });

  it('should be created', inject([CampaignsService], (service: CampaignsService) => {
    expect(service).toBeTruthy();
  }));
});
