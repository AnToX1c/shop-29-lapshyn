import { Injectable } from '@angular/core';
import { Config } from '../models/config.model';

@Injectable()
export class ConfigOptionsService {
  private config: Config;

  constructor() { }

  setConfig(obj: Config): void {
    const {id, login, email} = obj;
    this.config = new Config(id, login, email);
  }

  getConfig(): Config {
    return this.config;
  }
}
