import { TestBed, inject } from '@angular/core/testing';

import { CampaignPagesService } from './campaign-pages.service';

describe('CampaignPagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignPagesService]
    });
  });

  it('should be created', inject([CampaignPagesService], (service: CampaignPagesService) => {
    expect(service).toBeTruthy();
  }));
});
