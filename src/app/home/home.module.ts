import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MatToolbarModule } from "@angular/material/toolbar"; 
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";  
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";

import { HomeRoutingModule } from '@home/home-routing.module';
import { HomeComponent } from '@home/home.component';
import { ServicesModule } from '@services/services.module';
import { HeaderComponent } from '@home/components/header/header.component';
import { MapComponent } from '@home/components/map/map.component';
import { TableComponent } from '@home/components/table/table.component';

import { LocationsService } from '@home/services/locations.service';
import { LocationPipe } from './pipes/location.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MapComponent,
    TableComponent,
    LocationPipe
  ],
  providers: [
    LocationsService
  ],
  imports: [
    ServicesModule,
    
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatGridListModule,
    LeafletModule,
    MatTableModule,
  ]
})
export class HomeModule { }
