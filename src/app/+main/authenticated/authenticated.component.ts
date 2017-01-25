import { Component, OnInit } from '@angular/core';


import {
  AuthenticationService
} from '../../authentication/authentication.service';
import { User } from '../users/user';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss']
})
export class AuthenticatedComponent implements OnInit {

  currentUser: User;

  constructor(
    private authService: AuthenticationService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.find(this.authService.user.id)
      .subscribe((response) => this.currentUser = response);
  }

}
