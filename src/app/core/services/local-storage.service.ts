import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getData(key: string): any {
    const result = window.localStorage.length > 0 ? localStorage.getItem(key) : null;
    return result ? JSON.parse(result) : null;
  }

  setData(key: string, data: unknown): void {
    const stringData = JSON.stringify(data);
    localStorage.setItem(key, stringData);
  }

  removeData(key: string): void {
    window.localStorage.removeItem(key);
  }
}

export const LocalStorageSrvInstance = new LocalStorageService();
