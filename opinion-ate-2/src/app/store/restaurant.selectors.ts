import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RestaurantStateModel } from '@/app/models/restaurant-state.model';

export const selectRestaurantState =
  createFeatureSelector<RestaurantStateModel>('restaurant');
export const selectRestaurants = createSelector(
  selectRestaurantState,
  (state) => state.restaurants,
);
