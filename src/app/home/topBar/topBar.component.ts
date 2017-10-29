import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-top-bar',
  templateUrl: 'topBar.component.html',
  styleUrls: ['topBar.component.css']
})

export class TopBarComponent implements OnInit {
  isConnected: boolean;
  connectedUser: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("isConnected") == "false" || localStorage.getItem("isConnected") == undefined)
      this.isConnected = false;
    else {
      this.isConnected = true;
      this.connectedUser = localStorage.getItem("curentUser");
      console.log(this.connectedUser);
    }
  }

  logout(): void {
    this.isConnected = false;
    localStorage.setItem("isConnected", "false");
    this.router.navigate(['']);
  }
}
