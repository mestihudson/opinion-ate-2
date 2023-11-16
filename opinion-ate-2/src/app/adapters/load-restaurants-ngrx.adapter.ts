import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoadRestaurantsInteractor } from '@/app/interactors/load-restaurants.interactor';
import { RestaurantModel } from '@/app/models/restaurant.model';
import * as fromRestaurants from '@/app/store';

@Injectable({ providedIn: 'root' })
export class LoadRestaurantsNgrxAdapter extends LoadRestaurantsInteractor {
  constructor(private readonly store: Store) {
    super();
  }

  get(): Observable<RestaurantModel[]> {
    this.store.dispatch(fromRestaurants.loadRestaurants());
    return this.store.pipe(select(fromRestaurants.selectRestaurants));
  }
}
