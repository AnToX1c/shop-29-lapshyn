import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentRole = 'admin';

  constructor() { }

  getRole(): string {
    return this.currentRole;
  }
}
