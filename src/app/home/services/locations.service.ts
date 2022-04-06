import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { LocationItem } from "@home/interfaces/location";

@Injectable()
export class LocationsService {

  private readonly locations$ = new BehaviorSubject<LocationItem[]>([]);
  private locations : LocationItem[] = new Array<LocationItem>() ;

  public add(location: LocationItem) {
    this.locations.push(location);
    this.locations$.next(this.locations);
  }

  public getLocations(): Observable<LocationItem[]> {
    return this.locations$;
  }

  public deleteLocation(index: number) {
    this.locations.splice(index, 1);
    this.locations$.next(this.locations);
  }
}
