import { TestBed, inject } from '@angular/core/testing';

import { SpecializationsService } from './specializations.service';

describe('SpecializationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpecializationsService]
    });
  });

  it('should be created', inject([SpecializationsService], (service: SpecializationsService) => {
    expect(service).toBeTruthy();
  }));
});
