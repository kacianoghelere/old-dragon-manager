import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../shared/entities/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input('user') user: User;

  constructor(private usersService: UsersService) { }

  ngOnInit() { }

  avatar(email: string): string | Int32Array {
    return this.usersService.avatarHash(email);
  }

}
