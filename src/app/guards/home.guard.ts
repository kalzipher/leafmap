import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '@services/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanLoad {

  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService
  ) { }
  
  canLoad(): boolean {
    if (this.storageService.hasSession()) {
      return true;
    }
    this.router.navigateByUrl("/login");
    return false;
  }
  
}
