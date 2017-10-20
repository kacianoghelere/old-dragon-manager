import { TestBed, inject } from '@angular/core/testing';

import { AlignmentsService } from './alignments.service';

describe('AlignmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlignmentsService]
    });
  });

  it('should be created', inject([AlignmentsService], (service: AlignmentsService) => {
    expect(service).toBeTruthy();
  }));
});
