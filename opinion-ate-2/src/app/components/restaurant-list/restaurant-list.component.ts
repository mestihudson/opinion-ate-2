import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LoadRestaurantsInteractor } from '@/app/interactors/load-restaurants.interactor';
import { RestaurantModel } from '@/app/models/restaurant.model';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
})
export class RestaurantListComponent implements OnInit {
  restaurants$: Observable<RestaurantModel[]> = of([]);
  constructor(private loadRestaurants: LoadRestaurantsInteractor) {}

  ngOnInit() {
    this.restaurants$ = this.loadRestaurants.get();
  }
}
