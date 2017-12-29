import { Component, Input, OnInit } from '@angular/core';

import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'layout-base',
  templateUrl: './layout-base.component.html',
  styleUrls: ['./layout-base.component.scss']
})
export class LayoutBaseComponent implements OnInit {

  @Input('animatedHeader') animatedHeader: Boolean = false;
  @Input('cover') cover: String = '';
  @Input('description') description: String = '';
  @Input('pageTitle') title: String = '';
  isAuthenticated: boolean = false;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.authentication.subscribe((status: boolean) => {
      this.isAuthenticated = status;
      console.log('Authentication update', status);
    });
  }

  get coverImage(): any {
    return this.cover ? {'background-image': `url('${this.cover}')`} : null;
  }

  ngOnInit() {
    this.isAuthenticated = this.authenticationService.authenticated;
  }
}
