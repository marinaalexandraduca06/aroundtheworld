import {OnInit} from '@angular/core';

export class User implements OnInit{
  name: string;
  connected: boolean;

  ngOnInit(): void {
    this.connected = false;
  }
}
