import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Message } from '../../../util/message';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  message: Message;
  user: User;
  userForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {
    this.message = new Message();
    this.userForm = builder.group({
      "user-email": [''],
      "user-name": ['', Validators.required],
      "user-password": ['', Validators.compose(
        [Validators.required, Validators.minLength(4)]
      )],
      "user-confirm": ['', Validators.compose(
        [Validators.required, Validators.minLength(4)]
      )]
    });
  }

  ngOnInit() {
    this.user = new User;
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.usersService.find(id)
          .subscribe((response) => this.user = response);
      }
    });
  }

  saveChanges() {
    console.log(this.user);
  }

}
