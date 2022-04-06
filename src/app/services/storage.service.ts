import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserSession } from './interface';

@Injectable()
export class StorageService {

  private readonly keySessionStorage: string = "session";
  constructor(
    private readonly router: Router
  ) { }

  public setSession(user: UserSession) {
    localStorage.setItem(this.keySessionStorage, JSON.stringify(user));
  }

  public hasSession(): boolean {
    try {
      const userStr: string = localStorage.getItem(this.keySessionStorage) || "";
      const user: UserSession = JSON.parse(userStr);
      return Boolean(user?.username && user?.password);
    } catch {
      return false;
    }
  }

  public closeSession() {
    localStorage.removeItem(this.keySessionStorage);
    this.router.navigateByUrl("/login");
  }

}
