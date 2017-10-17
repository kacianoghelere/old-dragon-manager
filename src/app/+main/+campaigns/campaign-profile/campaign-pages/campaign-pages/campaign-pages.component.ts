import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'campaign-pages',
  templateUrl: './campaign-pages.component.html',
  styleUrls: ['./campaign-pages.component.scss']
})
export class CampaignPagesComponent implements OnInit, OnDestroy {

  constructor( ) { }


  ngOnDestroy() {
  }

  ngOnInit() {
  }
}
