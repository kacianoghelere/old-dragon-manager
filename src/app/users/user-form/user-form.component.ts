import { Subscription } from 'rxjs/Subscription';

import {
  Component, OnInit, OnDestroy, Input, Output, EventEmitter
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Role } from '../../shared/entities/role';
import { RolesService } from '../../roles/roles.service';
import { User } from '../../shared/entities/user';
import { UsersService } from '../users.service';
import {
  AuthenticationService
} from '../../authentication/authentication.service';
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
    if (this.currentUser.admin) {
      this.subscription = this.rolesService.list()
        .subscribe((response) => this.roles = response);
    }
  }

  //
  // Getters and Setters
  // ==========================================================================

  /**
   * Returns de the authenticated current user information
   * @return {any} Authenticated current user information
   */
  get currentUser(): any {
    return this.authService.currentUser || {admin: false};
  }

  //
  // Common functions
  // ==========================================================================

  /**
   * Emit the reset event
   */
  resetChanges(): void {
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
    // :name, :login, :pass, :inc_date, :last_login, :email, :role_id)

    this.userSubmitted.emit({
      name: this.user.name,
      login: this.user.login,
      password: this.user.password,
      password_confirmation: this.user.confirm,
      email: this.user.email,
      role_id: this.user.role.id
    });
    this.submitted = !this.submitted;
  }

}
