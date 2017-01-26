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

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  get authenticated(): boolean {
    return this.authService.authenticated;
  }
}
