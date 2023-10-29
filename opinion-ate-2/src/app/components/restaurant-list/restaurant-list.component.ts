import { Component, OnInit } from '@angular/core';

import { RestaurantListService } from '@/app/services/restaurant-list.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
})
export class RestaurantListComponent implements OnInit {
  constructor(private service: RestaurantListService) {}

  ngOnInit() {
    this.service.get();
  }
}
