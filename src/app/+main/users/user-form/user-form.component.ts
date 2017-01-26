import { Subscription } from 'rxjs/Subscription';

import {
  Component, OnInit, OnDestroy, Input, Output, EventEmitter
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Message } from '../../../shared/message';
import { User } from '../../../shared/user';
import { Role } from '../../../shared/role';
import { UsersService } from '../users.service';
import { RolesService } from '../../shared/roles.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy {

  @Input() user: User;
  @Output() userSubmitted: EventEmitter<User>;
  message: Message;
  roles: Role[];
  subscription: Subscription;
  userForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private rolesService: RolesService
  ) {
    this.message = new Message();
    this.userForm = this.builder.group({
      "user-confirm": ['', Validators.compose(
        [Validators.required, Validators.minLength(4)]
      )],
      "user-email": [''],
      "user-login": [''],
      "user-name": ['', Validators.required],
      "user-password": ['', Validators.compose(
        [Validators.required, Validators.minLength(4)]
      )],
      "user-role": [{}]
    });
    this.userSubmitted = new EventEmitter();
  }

  ngOnInit() {
    this.subscription = this.rolesService.list()
      .subscribe((response) => this.roles = response);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  resetChanges() {
  }

  saveChanges() {
    console.log("Form Submitted", this.user);
    this.userSubmitted.emit(this.user);
  }

}
