import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '@/app/app.component';
import { RestaurantListComponent } from '@/app/components/restaurant-list/restaurant-list.component';
import { RestaurantScreenComponent } from '@/app/components/restaurant-screen/restaurant-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantScreenComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
