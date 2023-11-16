import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RestaurantEffects } from '@/app/store/restaurant.effects';
import { restaurantsReducer } from '@/app/store/restaurant.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('restaurant', restaurantsReducer),
    EffectsModule.forFeature([RestaurantEffects]),
  ],
})
export class RestaurantStoreModule {}
