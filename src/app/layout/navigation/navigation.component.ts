import { Component, Input, OnInit } from '@angular/core';

import {
  AuthenticationService
} from '../../authentication/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input('title') title: string = '';

  // Public variables
  // ---------------------------------------------------------------------------
  authenticated: boolean = false;

  //
  // Functions
  // ===========================================================================

  constructor(private authService: AuthenticationService) {
    this.authService.authentication.subscribe((authenticated) => {
      this.authenticated = authenticated;
    });
  }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
  }

  //
  // Common functions
  // ---------------------------------------------------------------------------

  signout() {
    this.authService.signout(true);
  }
}
