import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const credentials = {
  admin: "admin",
  username: "password"
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";
  showError: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if(credentials[this.userName] && this.password === credentials[this.userName]) {
      this.showError = false;
      this.router.navigate(["dashboard"]);
    } else {
      this.showError = true;
    }
  }
}
