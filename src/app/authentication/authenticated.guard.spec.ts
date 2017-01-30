/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenticatedGuard } from './authenticated.guard';

describe('AuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticatedGuard]
    });
  });

  it('should ...', inject([AuthenticatedGuard], (service: AuthenticatedGuard) => {
    expect(service).toBeTruthy();
  }));
});
