import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { StorageService } from '@services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  
  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService
  ) {}

  canLoad(): boolean {
    console.log(this.storageService.hasSession())
    if (this.storageService.hasSession()) {
      this.router.navigateByUrl("/home");
      return true;
    }
    return true;
  }
  
}
