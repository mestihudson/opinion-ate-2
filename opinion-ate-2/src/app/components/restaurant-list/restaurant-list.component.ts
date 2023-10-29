import { Component, OnInit } from '@angular/core';

import { RestaurantModel } from '@/app/models/restaurant.model';
import { RestaurantListService } from '@/app/services/restaurant-list.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
})
export class RestaurantListComponent implements OnInit {
  restaurants: RestaurantModel[] = [];
  constructor(private service: RestaurantListService) {}

  ngOnInit() {
    this.service.get().subscribe({
      next: (response) => {
        this.restaurants = response;
      },
    });
  }
}
