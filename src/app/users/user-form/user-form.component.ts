import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Role, User } from '../../shared/models';
import { RolesService } from '../../roles/roles.service';
import { UsersService } from '../users.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ValidatorsService } from '../../shared/services/validators.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy {

  // Property & Event bindings
  // ---------------------------------------------------------------------------
  @Input() user: User;
  @Output() userReseted: EventEmitter<User>;
  @Output() userSubmitted: EventEmitter<any>;

  // Public variables
  // ---------------------------------------------------------------------------
  roles: Role[];
  submitted: boolean = false;
  userForm: FormGroup;

  // Private & Protected variables
  // ---------------------------------------------------------------------------
  private subscription: Subscription;

  constructor(
    private authService: AuthenticationService,
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private rolesService: RolesService,
    private validators: ValidatorsService
  ) {
    this.userReseted = new EventEmitter();
    this.userSubmitted = new EventEmitter();
  }

  //
  // Life cycle hook functions
  // ==========================================================================

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.resetChanges();
  }

  ngOnInit(): void {
    this.user.password = '';
    this.user.confirm = '';
    if (this.currentUser.role.admin) {
      this.subscription = this.rolesService.list().subscribe((response) => {
        this.roles = response;
      });
    }
    this.userForm = this.toFormGroup(this.user);
  }

  //
  // Getters and Setters
  // ==========================================================================

  /**
   * Returns de the authenticated current user information
   * @return {any} Authenticated current user information
   */
  get currentUser(): any {
    return this.authService.currentUser || {role: {admin: false}};
  }

  //
  // Common functions
  // ==========================================================================

  /**
   * Check if the role in the select input is the same of the user
   * @param  {Role}    role Role in the select input
   * @return {boolean}      Verification result
   */
  isSelectedRole(role: Role): boolean {
    if (!this.roles.length) return false;
    return role.id === this.user.role_id;
  }

  /**
   * Emit the save event
   */
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    let data: any = {
      name: value.name,
      user_code: value.user_code,
      password: value.password,
      password_confirmation: value.confirm,
      email: value.email,
      role_id: value.role_id
    };
    this.userSubmitted.emit(data);
    this.submitted = true;
  }

  /**
   * Emit the reset event
   */
  resetChanges(): void {
    this.userForm.reset();
    this.userReseted.emit(this.user);
  }

  /**
   * [toFormGroup description]
   * @param  {User}      user [description]
   * @return {FormGroup}      [description]
   */
  toFormGroup(user: User): FormGroup {
    return this.builder.group({
      user_code: [user.user_code, Validators.required],
      name: [user.name, Validators.required],
      email: [user.email, Validators.required],
      password: [user.password, Validators.compose(
        [Validators.required, Validators.minLength(6)]
      )],
      confirm: [user.confirm, Validators.compose(
        [Validators.required, Validators.minLength(6)]
      )],
      role_id: [user.role_id]
    },
    {
      validator: this.validators.matchingPasswords('password', 'confirm')
    });
  }
}
