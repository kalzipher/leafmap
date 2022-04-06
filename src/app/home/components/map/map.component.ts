import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LocationsService } from '@home/services/locations.service';
import { Map, MapOptions, tileLayer, latLng, LeafletMouseEvent, map } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnDestroy {

  private readonly layerStr = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  private readonly attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  
  public map!: Map;

  public options: MapOptions = {
      layers:[tileLayer(this.layerStr, {
        opacity: 0.7,
        maxZoom: 19,
        detectRetina: true,
        attribution: this.attribution
      })],
      zoom: 7,
      center:latLng(6.2476, -75.5658)
  };

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(
    private readonly locationService: LocationsService
  ) { }

  ngAfterViewInit(): void {
    this.initMap()
  }
  
  ngOnDestroy(): void {
    if (this.map) {
      this.map.off();
      this.map.remove();
    }
  }

  onMapClick(evt: LeafletMouseEvent) {
    this.locationService.add({
      date: new Date(),
      latitude: evt.latlng.lat,
      longitude: evt.latlng.lng
    });
  }

  private initMap(): void {
    this.map = map(this.mapContainer.nativeElement, this.options);
    this.map.addEventListener('click', e => this.onMapClick(e as LeafletMouseEvent))
  }

}
