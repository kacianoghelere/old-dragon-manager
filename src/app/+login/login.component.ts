import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {email: '', password: ''};
  message: any = {text: '', error: false};

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  authenticate() {
    let response = this.authService.authenticate(this.user);
    response.subscribe((res) => {
        this.router.navigate(['/main']);
      }, (error) => {
        this.message.text = 'Authentication Error';
      });
  }

  ngOnInit() {
  }
}
