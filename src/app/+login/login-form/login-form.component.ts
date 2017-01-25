import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { Message } from '../../util/message';
import {
  AuthenticationService
} from '../../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  message: Message;
  user: any = {email: '', password: ''};

  constructor(
    private authService: AuthenticationService,
    private builder: FormBuilder,
    private router: Router
  ) {
    this.message = new Message();
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
