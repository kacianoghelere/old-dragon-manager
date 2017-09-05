import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from '../../shared/message';
import { User } from '../../shared/entities/user';
import { UsersService } from '../users.service';
import {
  AuthenticationService
} from '../../authentication/authentication.service';

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit, OnDestroy {

  // Public variables
  // ---------------------------------------------------------------------------
  message: Message;
  user: User;

  // Private & Protected variables
  // ---------------------------------------------------------------------------
  private authSubscription: Subscription;
  private subscription: Subscription;

  //
  // Functions
  // ===========================================================================

  constructor(
    private authService: AuthenticationService,
    private usersService: UsersService,
    private router: Router
  ) {
    this.message = new Message();
  }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
    this.user = new User;
    this.authSubscription = this.authService.authentication.subscribe(
      (authenticated) => {
        if (!authenticated) {
          this.message.error = true;
          this.message.text = 'Cadastrado com sucesso, porém não autenticado.';
        }
      }
    );
  }

  ngOnDestroy() {
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  //
  // Common functions
  // ---------------------------------------------------------------------------

  /**
   * Sends the register user information to the API
   * @param {User} user User data
   */
  registerUser(user: User) {
    this.usersService.create(user).subscribe((response: User) => {
      this.message.error = false;
      this.message.text = `Dados cadastrados com sucesso! ID #${response.id}`;
      this.authService.signin({email: user.email, password: user.password});
    },  (error) => {
      this.message.error = true;
      this.message.text = 'Ocorreu um erro ao enviar os dados.';
    }, () => console.log(this.message));
  }

}
