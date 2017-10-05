import { TestBed, inject } from '@angular/core/testing';

import { WikiCategoriesService } from './wiki-categories.service';

describe('WikiCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikiCategoriesService]
    });
  });

  it('should be created', inject([WikiCategoriesService], (service: WikiCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
