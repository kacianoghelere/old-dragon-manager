import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.authenticated) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canLoad(route: Route): boolean {
    if (!this.authService.authenticated) {
      return true;
    }
    this.router.navigate(['/main']);
    return false;
  }
}
