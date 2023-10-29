import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { RestaurantModel } from '@/app/models/restaurant.model';

@Injectable({ providedIn: 'root' })
export class RestaurantListService {
  get(): Observable<RestaurantModel[]> {
    return of([]);
  }
}
