import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of object
  SalesPersonList: SalesPerson[] = [
    new SalesPerson("Piyush", "Kumar", "piyush@luv2code.com", 50000),
    new SalesPerson("Ashish", "Ranjan", "ashish@luv2code.com", 70000),
    new SalesPerson("Vishal", "Saxena", "vishal@luv2code.com", 40000),
    new SalesPerson("Shivi", "Sharma", "shivi@luv2code.com", 30000),
    new SalesPerson("Sonal", "Kumari", "sonal@luv2code.com", 80000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
