import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { Message } from '../../shared/message';
import {
  AuthenticationService
} from '../../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  message: Message;
  user: any = {email: '', password: ''};
  private subscription: Subscription;

  constructor(
    private authService: AuthenticationService,
    private builder: FormBuilder,
    private router: Router
  ) {
    this.message = new Message();
    this.loginForm = builder.group({
      loginEmail: ['', Validators.compose(
          [Validators.required, Validators.minLength(4)]
      )],
      loginPassword: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.subscription = this.authService.authentication.subscribe(
      (authenticated) => {
        if (authenticated) {
          this.router.navigate(['/main']);
        } else {
          this.message.error = true;
          this.message.text = 'Authentication Error';
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * Sends the authentication data to the service, awaits for eventemitter
   */
  authenticate() {
    this.authService.authenticate(this.user);
  }

  /**
   * [hasError description]
   * @param  {string} property [description]
   * @return {any}             [description]
   */
  hasError(property: string): any {
    return {'has-error': this.loginForm.controls[property].invalid};
  }
}
