import { Component } from '@angular/core';
import { destinations } from '../../../enums/destinations';

@Component ({
  selector: 'app-map',
  templateUrl: 'all-destinations.component.html',
  styleUrls: ['all-destinations.component.css']
})

export class AllDestinationsComponent {
  private continents: string[] =  ['Africa',  'Antarctica', 'Asia', 'Europe', 'North America', 'South America'];
  private countries: any = {
    'Europe': [
      'Franta',
      'Marea Britanie'
    ]
  };

  private cities: any = {
    'Franta': [
      'Paris'
    ],
    'Marea Britanie': [
      'Londra'
    ]
  };
  
  private destinations: any = [];

  constructor() {
    this.destinations = destinations;
    console.log(this.destinations);
  }
}
