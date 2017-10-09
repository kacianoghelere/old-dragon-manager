import { TestBed, async, inject } from '@angular/core/testing';

import { CampaignDungeonMasterGuard } from './campaign-dungeon-master.guard';

describe('CampaignDungeonMasterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignDungeonMasterGuard]
    });
  });

  it('should ...', inject([CampaignDungeonMasterGuard], (guard: CampaignDungeonMasterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
