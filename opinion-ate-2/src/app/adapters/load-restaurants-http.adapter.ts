import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoadRestaurantsInteractor } from '@/app/interactors/load-restaurants.interactor';
import { RestaurantModel } from '@/app/models/restaurant.model';
import { environment } from '@/environments/environment';

@Injectable({ providedIn: 'root' })
export class LoadRestaurantsHttpAdapter extends LoadRestaurantsInteractor {
  constructor(private http: HttpClient) {
    super();
  }

  get(): Observable<RestaurantModel[]> {
    const token = 'API_HASH_TOKEN';
    const url = `${environment.api}/${token}/restaurants`;
    return this.http.get<RestaurantModel[]>(url);
  }
}
