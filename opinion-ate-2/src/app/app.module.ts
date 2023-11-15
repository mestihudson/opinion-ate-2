import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from '@/app/app.component';
import { LoadRestaurantsNgrxAdapter } from '@/app/adapters/load-restaurants-ngrx.adapter';
import { RestaurantListComponent } from '@/app/components/restaurant-list/restaurant-list.component';
import { RestaurantScreenComponent } from '@/app/components/restaurant-screen/restaurant-screen.component';
import { LoadRestaurantsInteractor } from '@/app/interactors/load-restaurants.interactor';
import { RestaurantStoreModule } from '@/app/store/restaurant-store.module';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantScreenComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot(),
    StoreModule.forRoot(),
    RestaurantStoreModule,
  ],
  providers: [
    {
      provide: LoadRestaurantsInteractor,
      useClass: LoadRestaurantsNgrxAdapter,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
