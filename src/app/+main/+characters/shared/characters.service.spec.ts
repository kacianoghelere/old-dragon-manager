/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CharactersService } from './characters.service';

describe('CharactersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharactersService]
    });
  });

  it('should ...', inject([CharactersService], (service: CharactersService) => {
    expect(service).toBeTruthy();
  }));
});
