import { Component, OnInit } from '@angular/core';

import { links } from '../../enums/app.enums';

@Component ({
  selector: 'app-most-visited',
  templateUrl: 'mostvisited.component.html',
  styleUrls: ['mostvisited.component.css']
})

export class MostvisitedComponent implements OnInit{
  visible: boolean;
  link: string;

  ngOnInit(): void {
    this.visible = false;
  }

  show(ind: number): void{
    this.visible = true;
    this.link = links[0];
  }

  close(): void {
    this.visible = false;
  }
}
