import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'layout-base-navigation',
  templateUrl: './layout-base-navigation.component.html',
  styleUrls: ['./layout-base-navigation.component.scss']
})
export class LayoutBaseNavigationComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.authentication.subscribe(
      (status: boolean) => this.isAuthenticated = status
    );
  }
  ngOnInit() {
    this.isAuthenticated = this.authenticationService.authenticated;
  }
}
