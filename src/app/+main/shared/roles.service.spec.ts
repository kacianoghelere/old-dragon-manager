/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RolesService } from './roles.service';

describe('RolesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolesService]
    });
  });

  it('should ...', inject([RolesService], (service: RolesService) => {
    expect(service).toBeTruthy();
  }));
});
