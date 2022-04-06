import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { LocationItem } from '@home/interfaces/location';
import { LocationsService } from '@home/services/locations.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['longitude', 'latitude', 'date', 'action'];
  dataSource: LocationItem[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  @ViewChild(MatTable) table!: MatTable<LocationItem>;

  constructor(
    private readonly locationService: LocationsService
  ) { }
  
  ngOnInit(): void {
    this.listenLocations();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  public deleteRow(indexRow: number) {
    this.locationService.deleteLocation(indexRow);
  }

  private listenLocations() {
    this.locationService.getLocations().pipe(takeUntil(this.destroy$)).subscribe({
      next: (locations: LocationItem[]) => {
        console.log(locations)
        this.dataSource = locations;
        this.table?.renderRows();
      }
    });
  }
}
