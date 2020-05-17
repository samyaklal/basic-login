import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    if(this.userName === "admin" && this.password === "admin") {
      this.showError = false;
      this.router.navigate(["dashboard"]);
    } else {
      this.showError = true;
    }
  }
}
