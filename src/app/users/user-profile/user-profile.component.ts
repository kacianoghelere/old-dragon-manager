import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';
import { User } from '../../shared/entities/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  // Public variables
  // ---------------------------------------------------------------------------
  index: string = 'I';
  subscription: Subscription;
  user: User;
  user_id: number;

  //
  // Functions
  // ===========================================================================

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private usersService: UsersService
  ) { }

  /**
   * Verifica se o indice recebido é o índice da aba ativa
   * @param  {string}  index Indice a ser comparado
   * @return {boolean}       Resultado da verificação
   */
  isActiveTab(index: string): boolean {
    return this.index === index;
  }

  refresh() {
    if (this.user_id) {
      this.subscription = this.usersService.find(this.user_id)
        .subscribe((response) => this.user = response);
    }
  }

  /**
   * Modifica a aba ativa
   * @param {string} index Novo índice
   */
  setActiveTab(index: string) {
    this.index = index;
  }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
    this.user = new User;
    console.log("currentUser:", this.authService.currentUser);
    this.route.params.subscribe((params) => {
      this.user_id = params['id'];
      this.refresh();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  //
  // Getters & Setters
  // ---------------------------------------------------------------------------

  /**
   * Genereates the url with the email hash for gravatar
   * @return {string}       Url with the email hash for gravatar
   */
  get avatar(): string | Int32Array {
    return this.usersService.avatarHash(this.user.email);
  }

  /**
   * Checks if the profile can be changed by de the current user
   * @return {boolean} Profile can be changed by de the current user?
   */
  get canChange(): boolean {
    return this.authService.isAdminUser() || (this.isCurrentUser === true);
  }

  /**
   * Checks if the profile displayed belongs to the current user
   * @return {boolean} Profile displayed belongs to the current user?
   */
  get isCurrentUser(): boolean {
    return this.authService.currentUser.id === this.user.id;
  }

}
