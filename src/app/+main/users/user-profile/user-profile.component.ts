import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../../shared/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  user: User;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }

  avatar(email: string): string | Int32Array {
    return this.usersService.avatarHash(email);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.subscription = this.usersService.find(id)
          .subscribe((response) => this.user = response);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
