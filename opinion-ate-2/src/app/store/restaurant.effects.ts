import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import * as fromRestaurants from '@/app/store';
import { LoadRestaurantsHttpAdapter } from '@/app/adapters/load-restaurants-http.adapter';
import { RestaurantModel } from '@/app/models/restaurant.model';

@Injectable()
export class RestaurantEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly loadRestaurantsService: LoadRestaurantsHttpAdapter,
  ) {}

  loadRestaurants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRestaurants.loadRestaurants.type),
      switchMap(() => this.loadRestaurantsService.get()),
      map((restaurants: RestaurantModel[]) =>
        fromRestaurants.loadRestaurantsSuccess({ restaurants }),
      ),
    ),
  );
}
