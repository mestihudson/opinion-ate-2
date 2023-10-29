import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RestaurantListService {
  get(): Observable<any[]> {
    return of([]);
  }
}
