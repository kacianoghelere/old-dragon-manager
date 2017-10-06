import { TestBed, inject } from '@angular/core/testing';

import { CampaignNotesService } from './campaign-notes.service';

describe('CampaignNotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignNotesService]
    });
  });

  it('should be created', inject([CampaignNotesService], (service: CampaignNotesService) => {
    expect(service).toBeTruthy();
  }));
});
