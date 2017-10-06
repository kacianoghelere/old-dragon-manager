import { TestBed, inject } from '@angular/core/testing';

import { CampaignCharactersService } from './campaign-characters.service';

describe('CampaignCharactersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignCharactersService]
    });
  });

  it('should be created', inject([CampaignCharactersService], (service: CampaignCharactersService) => {
    expect(service).toBeTruthy();
  }));
});
