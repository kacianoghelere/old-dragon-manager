import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

  @Input('user') user: User;

  constructor(private usersService: UsersService) { }

  ngOnInit() { }

  avatar(email: string): string | Int32Array {
    return this.usersService.avatarHash(email);
  }

}
