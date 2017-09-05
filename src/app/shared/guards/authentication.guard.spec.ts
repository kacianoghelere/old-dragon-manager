/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenticationGuardService } from './authentication-guard.service';

describe('AuthenticationGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationGuardService]
    });
  });

  it('should ...', inject([AuthenticationGuardService], (service: AuthenticationGuardService) => {
    expect(service).toBeTruthy();
  }));
});
