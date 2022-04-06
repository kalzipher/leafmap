import { Component, OnInit } from '@angular/core';
import { StorageService } from '@services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private readonly storageService: StorageService
  ) { }

  public logout() {
    this.storageService.closeSession();
  }
}
