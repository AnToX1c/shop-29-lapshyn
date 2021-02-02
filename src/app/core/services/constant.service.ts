import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {

  constant = { App: 'TaskManager', Ver: '1.0', API_URL: 'http://localhost' };

  constructor() { }
}

export const ConstantServiceObj = new ConstantService().constant;
