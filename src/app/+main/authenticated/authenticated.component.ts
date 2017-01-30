import { Component, OnInit } from '@angular/core';
import { Headers } from '@angular/http';

import {
  AuthenticationService
} from '../../authentication/authentication.service';
import { User } from '../../shared/entities/user';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss']
})
export class AuthenticatedComponent implements OnInit {

  currentUser: User;
  private headers: Headers;
  private url: string = 'http://localhost:3000/api/v1';

  constructor(
    private authService: AuthenticationService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.find(this.authService.currentUser.id)
      .subscribe((response) => this.currentUser = response);
  }

}
