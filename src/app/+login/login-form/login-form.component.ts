import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  // Public variables
  // ---------------------------------------------------------------------------
  loginForm: FormGroup;
  message: Message;
  user: any = {email: '', password: ''};

  // Private & Protected variables
  // ---------------------------------------------------------------------------
  private subscription: Subscription;

  //
  // Functions
  // ===========================================================================

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

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
    this.subscription = this.authService.authentication.subscribe(
      (authenticated) => {
        if (!authenticated) {
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

  //
  // Common functions
  // ---------------------------------------------------------------------------

  /**
   * Sends the authentication data to the service, awaits for eventemitter
   */
  authenticate() {
    this.authService.signin(this.user);
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
