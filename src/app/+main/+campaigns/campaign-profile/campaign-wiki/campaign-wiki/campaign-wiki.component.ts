import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'campaign-wiki',
  templateUrl: './campaign-wiki.component.html',
  styleUrls: ['./campaign-wiki.component.scss']
})
export class CampaignWikiComponent implements OnInit, OnDestroy {

  constructor( ) { }


  ngOnDestroy() {
  }

  ngOnInit() {
  }
}
