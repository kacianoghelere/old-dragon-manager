import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../../shared/entities/user';

@Component({
  selector: 'user-campaigns',
  templateUrl: './user-campaigns.component.html',
  styleUrls: ['./user-campaigns.component.scss']
})
export class UserCampaignsComponent implements OnInit {

  @Input('user') user: User;

  constructor() { }

  ngOnInit() {
  }

}
