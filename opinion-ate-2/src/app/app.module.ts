import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '@/app/app.component';
import { LoadRestaurantsHttpAdapter } from '@/app/adapters/load-restaurants-http.adapter';
import { RestaurantListComponent } from '@/app/components/restaurant-list/restaurant-list.component';
import { RestaurantScreenComponent } from '@/app/components/restaurant-screen/restaurant-screen.component';
import { LoadRestaurantsInteractor } from '@/app/interactors/load-restaurants.interactor';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantScreenComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: LoadRestaurantsInteractor,
      useClass: LoadRestaurantsHttpAdapter,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
