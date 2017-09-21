import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../../shared/entities/user';

@Component({
  selector: 'user-characters',
  templateUrl: './user-characters.component.html',
  styleUrls: ['./user-characters.component.scss']
})
export class UserCharactersComponent implements OnInit {

  @Input('user') user: User;

  constructor() { }

  ngOnInit() {
  }

}
