import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';
import { User } from '../../shared/entities/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  // Public variables
  // ---------------------------------------------------------------------------
  subscription: Subscription;
  user: User;

  //
  // Functions
  // ===========================================================================

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private usersService: UsersService
  ) { }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
    this.user = new User;
    console.log("currentUser:", this.authService.currentUser);
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.subscription = this.usersService.find(id)
          .subscribe((response) => this.user = response);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  //
  // Getters & Setters
  // ---------------------------------------------------------------------------

  /**
   * Genereates the url with the email hash for gravatar
   * @return {string}       Url with the email hash for gravatar
   */
  get avatar(): string | Int32Array {
    return this.usersService.avatarHash(this.user.email);
  }

  /**
   * Checks if the profile can be changed by de the current user
   * @return {boolean} Profile can be changed by de the current user?
   */
  get canChange(): boolean {
    return this.authService.isAdminUser() || (this.isCurrentUser === true);
  }

  /**
   * Checks if the profile displayed belongs to the current user
   * @return {boolean} Profile displayed belongs to the current user?
   */
  get isCurrentUser(): boolean {
    return this.authService.currentUser.id === this.user.id;
  }

}
