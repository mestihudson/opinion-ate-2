import { Component, OnInit } from '@angular/core';

import { LoadRestaurantsInteractor } from '@/app/interactors/load-restaurants.interactor';
import { RestaurantModel } from '@/app/models/restaurant.model';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
})
export class RestaurantListComponent implements OnInit {
  restaurants: RestaurantModel[] = [];
  constructor(private loadRestaurants: LoadRestaurantsInteractor) {}

  ngOnInit() {
    this.loadRestaurants.get().subscribe({
      next: (response) => {
        this.restaurants = response;
      },
    });
  }
}
