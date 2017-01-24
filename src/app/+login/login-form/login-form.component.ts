import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import {
  AuthenticationService
} from '../../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: any = {email: '', password: ''};
  message: any = {text: '', error: false};

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  authenticate() {
    let response = this.authService.authenticate(this.user);
    response.subscribe((res) => {
        this.router.navigate(['/main']);
      }, (error) => {
        this.message.text = 'Authentication Error';
      });
  }

  ngOnInit() {
  }
}
