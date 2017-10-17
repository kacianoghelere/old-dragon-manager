import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { CampaignPagesService } from './campaign-pages.service';

@Injectable()
export class CampaignPageGuard implements CanActivate {

  constructor(
    private router: Router,
    private campaignPagesService: CampaignPagesService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    let campaign_id = next.parent.parent.parent.params.campaign_id;
    let page_id = next.params.page_id;
    return this.campaignPagesService.findChild(campaign_id, page_id)
      .map((page) =>{
        if (page) {
          return true;
        }
        console.log("Redirecionado pelo CampaignPageGuard");
        this.router.navigate(['/main/campaigns', campaign_id, 'pages' , 'blank']);
        return false;
      });
  }
}
