import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/entities/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.list()
      .subscribe((response) => this.users = response);
  }

}
