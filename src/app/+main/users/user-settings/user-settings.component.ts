import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Message } from '../../../shared/message';
import { User } from '../../../shared/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit, OnDestroy {

  user_id: number;
  message: Message;
  subscription: Subscription;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {
    this.message = new Message();
  }

  ngOnInit() {
    this.user = new User;
    this.route.params.subscribe((params) => {
      this.user_id = params['id'];
      if (this.user_id) {
        this.subscription = this.usersService.find(this.user_id)
          .subscribe((response) => this.user = response);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * Sends the updated user information to the API
   * @param  {User}   user User data
   */
  updateUser(user: User) {
    let fail = (error) => {
      this.message.error = true;
      this.message.text = 'Ocorreu um erro ao atualizar os dados';
    };

    let success = (response) => {
      this.message.error = false;
      this.message.text = 'Dados atualizados com sucesso';
    };

    let sendMessage = () => console.log(this.message);

    this.usersService.update(this.user_id, user)
      .subscribe(success, fail, sendMessage);
  }

}
