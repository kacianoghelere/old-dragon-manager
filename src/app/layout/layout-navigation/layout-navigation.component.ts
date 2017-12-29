import { Component, Input, OnInit } from '@angular/core';

import { AuthenticationService } from '../../authentication/authentication.service';
import { CoreComponent } from '../../shared/components/core/core.component';
import { User } from '../../shared/entities/user';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'layout-navigation',
  templateUrl: './layout-navigation.component.html',
  styleUrls: ['./layout-navigation.component.scss']
})
export class LayoutNavigationComponent extends CoreComponent implements OnInit {

  @Input('title') title: string = '';
  isAuthenticated: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private usersService: UsersService
  ) {
    super();
    this.authenticationService.authentication.subscribe((status: boolean) => {
      this.isAuthenticated = status;
    });
  }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
    this.isAuthenticated = this.authenticationService.authenticated;
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
    let currentUser = this.authenticationService.currentUser;
    return currentUser || {id: null, name: ''};
  }

  //
  // Common functions
  // ---------------------------------------------------------------------------

  /**
   * [signout description]
   * @return {[type]} [description]
   */
  logout() {
    this.authenticationService.logout(true);
  }
}
