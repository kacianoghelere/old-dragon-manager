import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { CampaignsService } from './campaigns.service';

@Injectable()
export class CampaignGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    let campaign_id = next.params.campaign_id;
    return this.campaignsService.canActivateOwner(campaign_id);
  }
}
