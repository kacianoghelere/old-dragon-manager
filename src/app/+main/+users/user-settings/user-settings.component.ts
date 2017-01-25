import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  user: User;
  userForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {
    this.userForm = builder.group({
        "user-name": ['', Validators.compose(
            [Validators.required, Validators.minLength(4)]
        )],
        url: ['', Validators.required],
        descricao: ['']
    });
  }

  ngOnInit() {
  }

  saveChanges() {
    console.log(this.user);
  }

}
