import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  noUsername: boolean;
  noPassword: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.noUsername = false;
    this.noPassword = false;
  }

  public checkForUsername(): boolean {
    if(this.username && this.username != "") {
      this.noUsername = false;
      return true;
    }
    return false;
  }

  public checkForPassword(): boolean {
    if(this.password && this.password != "") {
      this.noPassword = false;
      return true;
    }
    return false;      
  }

  public login(): void {
    if (this.checkForUsername() && this.checkForPassword()) {
      localStorage.setItem("curentUser", this.username);
      localStorage.setItem("isConnected", "true");
      this.router.navigate(['']);
    } 
    if(!this.checkForUsername()) {
      this.noUsername = true;
    }
    if(!this.checkForPassword()) {
      this.noPassword = true;
    }
  }
}
