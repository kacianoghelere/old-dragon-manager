import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../entities/user';

@Component({
  selector: 'user-pill',
  templateUrl: './user-pill.component.html',
  styleUrls: ['./user-pill.component.scss']
})
export class UserPillComponent implements OnInit {

  @Input('user') user: User;

  constructor() { }

  ngOnInit() {
  }

}
