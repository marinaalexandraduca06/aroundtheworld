import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})

export class MenuComponent implements OnInit {
  public isConnected: boolean;
  public connectedUser: string;

  constructor(
    private userSVC: UserService
  ){}

  public ngOnInit(): void {
  //   console.log('menu onInit');
  //   if (localStorage.getItem("isConnected") === "true") {
  //     this.isConnected = true;
  //   } else {
  //     this.isConnected = false;
  //   }
  }
}
