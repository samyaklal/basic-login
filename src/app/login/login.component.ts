import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";
  showError: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService  
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.validateCredentials(this.userName, this.password).then(result => {
      if(result) {
        this.showError = false;
        this.router.navigate(["dashboard"]);
      } else {
        this.showError = true;
      }
    });
  }  
}
