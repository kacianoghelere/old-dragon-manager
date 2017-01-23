import { Component } from '@angular/core';

import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'OD Manager';

  constructor(private authService: AuthenticationService) {}

  get authenticated(): boolean {
    return this.authService.authenticated;
  }
}
