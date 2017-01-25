import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  loginForm: FormGroup;
  message: any = {text: '', error: false};

  constructor(
    private authService: AuthenticationService,
    private builder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = builder.group({
      "login-email": ['', Validators.compose(
          [Validators.required, Validators.minLength(4)]
      )],
      "login-password": ['', Validators.required]
    });
  }

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
