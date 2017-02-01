/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModifiersService } from './modifiers.service';

describe('ModifiersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModifiersService]
    });
  });

  it('should ...', inject([ModifiersService], (service: ModifiersService) => {
    expect(service).toBeTruthy();
  }));
});
