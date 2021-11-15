import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {

  public searchText: string;
  public filter: any;

  constructor() { }

  ngOnInit() {
  }

  public changeFilter(filter) {
    this.filter = filter;
  }

}
