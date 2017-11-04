import { Component, OnInit, Input } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-top-bar',
  templateUrl: 'topBar.component.html',
  styleUrls: ['topBar.component.css']
})

export class TopBarComponent implements OnInit {
  public isConnected: boolean;
  public connectedUser: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userSVC: UserService
  ) { }

  ngOnInit(): void {
    //
  }

  logout(): void {
    this.userSVC.logout();
    this.router.navigate(['']);
  }
}
