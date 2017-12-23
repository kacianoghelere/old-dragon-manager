import { TestBed, inject } from '@angular/core/testing';

import { CustomMarkdownService } from './custom-markdown.service';

describe('CustomMarkdownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomMarkdownService]
    });
  });

  it('should be created', inject([CustomMarkdownService], (service: CustomMarkdownService) => {
    expect(service).toBeTruthy();
  }));
});
