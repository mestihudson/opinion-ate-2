import { createAction, props } from '@ngrx/store';

import { RestaurantModel } from '@/app/models/restaurant.model';

const prefix = '[Restaurant]';

export const loadRestaurants = createAction(`${prefix} Load restaurants`);

export const loadRestaurantsSuccess = createAction(
  `${loadRestaurants.type} Success`,
  props<{
    restaurants: RestaurantModel[];
  }>(),
);
