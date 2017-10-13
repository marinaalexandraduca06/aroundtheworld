import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  login(): void {
    localStorage.setItem('curentUser', this.username);
    localStorage.setItem('isConnected', 'true');
    this.router.navigate(['home']);
  }
}
