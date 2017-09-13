import { Component, Input, OnInit } from '@angular/core';

import { AuthenticationService } from '../../authentication/authentication.service';
import { User } from '../../shared/entities/user';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'layout-navigation',
  templateUrl: './layout-navigation.component.html',
  styleUrls: ['./layout-navigation.component.scss']
})
export class LayoutNavigationComponent implements OnInit {

  @Input('title') title: string = '';

  // Public variables
  // ---------------------------------------------------------------------------
  authenticated: boolean = false;

  //
  // Functions
  // ===========================================================================

  constructor(
    private authService: AuthenticationService,
    private usersService: UsersService
  ) {
    this.authService.authentication.subscribe((authenticated) => {
      this.authenticated = authenticated;
    });
  }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
    this.authenticated = this.authService.authenticated;
  }

  //
  // Getters & Setters
  // ---------------------------------------------------------------------------

  /**
   * Genereates the url with the email hash for gravatar
   * @return {string}       Url with the email hash for gravatar
   */
  get avatar(): string | Int32Array {
    return this.usersService.avatarHash(this.currentUser.email);
  }

  /**
   * Returns the authenticated user information
   * @return {User} Authenticated user information
   */
  get currentUser(): User {
    let currentUser = this.authService.currentUser;
    return currentUser || new User;
  }

  //
  // Common functions
  // ---------------------------------------------------------------------------

  /**
   * [signout description]
   * @return {[type]} [description]
   */
  logout() {
    this.authService.logout(true);
  }
}
