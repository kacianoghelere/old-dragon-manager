import { TestBed, inject } from '@angular/core/testing';

import { PageCategoriesService } from './page-categories.service';

describe('PageCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageCategoriesService]
    });
  });

  it('should be created', inject([PageCategoriesService], (service: PageCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
