import { Component, OnInit } from '@angular/core';

import { links } from '../../../app.enums';
import { DomSanitizer } from '@angular/platform-browser';

@Component ({
  selector: 'app-most-visited',
  templateUrl: 'mostvisited.component.html',
  styleUrls: ['mostvisited.component.css']
})

export class MostvisitedComponent implements OnInit{
  visible: boolean;
  link: string;

  constructor(public sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.visible = false;
  }

  show(ind: number): void{
    console.log(links);
    this.visible = true;
    this.link = links[ind];
    console.log(this.link);
  }

  close(): void {
    this.visible = false;
  }
}
