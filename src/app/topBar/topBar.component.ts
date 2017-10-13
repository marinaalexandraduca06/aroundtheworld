import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: 'topBar.component.html',
  styleUrls: ['topBar.component.css']
})

export class TopBarComponent implements OnInit {
  connected: boolean;
  option: number;

  ngOnInit(): void {
    this.connected = false;
    this.option = 0;
  }
}
