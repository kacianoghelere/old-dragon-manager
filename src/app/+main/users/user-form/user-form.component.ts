import { Subscription } from 'rxjs/Subscription';

import {
  Component, OnInit, OnDestroy, Input, Output, EventEmitter
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Message } from '../../../shared/message';
import { Role } from '../../../shared/role';
import { RolesService } from '../../shared/roles.service';
import { User } from '../../../shared/user';
import { UsersService } from '../users.service';
import { ValidatorsService } from '../../../shared/validators.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy {

  @Input() user: User;
  @Output() userSubmitted: EventEmitter<User>;
  @Output() userReseted: EventEmitter<User>;
  message: Message;
  roles: Role[];
  subscription: Subscription;
  userForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private rolesService: RolesService,
    private validators: ValidatorsService
  ) {
    this.message = new Message();
    this.userForm = this.builder.group({
      userLogin: ['', Validators.required],
      userName: ['', Validators.required],
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.compose(
        [Validators.required, Validators.minLength(6)]
      )],
      userConfirm: ['', Validators.compose(
        [Validators.required, Validators.minLength(6)]
      )],
      userRole: [{}, Validators.required]
    },
    {
      validator: this.validators.matchingPasswords('userPassword', 'userConfirm')
    });

    this.userReseted = new EventEmitter();
    this.userSubmitted = new EventEmitter();
    console.log(this.userForm);
  }

  ngOnInit(): void {
    this.user.password = '';
    this.user.confirm = '';

    this.subscription = this.rolesService.list()
      .subscribe((response) => this.roles = response);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.resetChanges();
  }

  /**
   * Emit the save event
   */
  resetChanges(): void {
    // console.log(this.userForm);
    this.userForm.reset();
    this.userReseted.emit(this.user);
  }

  /**
   * Check if the role in the select input is the same of the user
   * @param  {Role}    role Role in the select input
   * @return {boolean}      Verification result
   */
  selectedRole(role: Role): boolean {
    return role.id === this.user.id;
  }

  /**
   * Emit the save event
   */
  submitChanges(): void {
    this.userSubmitted.emit(this.user);
  }

}
