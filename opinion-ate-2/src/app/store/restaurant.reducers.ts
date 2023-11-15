import { createReducer, on } from '@ngrx/store';

import { RestaurantStateModel } from '@/app/models/restaurant-state.model';
import * as fromRestaurants from '@/app/store';

export const initialRestaurantsState: RestaurantStateModel = {
  restaurants: [],
};

const reducer = createReducer<RestaurantStateModel>(
  initialRestaurantsState,
  on(fromRestaurants.loadRestaurants, (state) => {
    return {
      ...state,
    };
  }),
  on(fromRestaurants.loadRestaurantsSuccess, (state, { restaurants }) => {
    return {
      ...state,
      restaurants,
    };
  }),
);

export function restaurantsReducer(
  state = initialRestaurantsState,
  actions: any,
): RestaurantStateModel {
  return reducer(state, actions);
}
