import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getProducts(): object[] {
    return [
      {
        id: 1,
        name: 'Water',
        price: 2,
        amount: 5,
      },
      {
        id: 2,
        name: 'Laptop',
        price: 1500,
        amount: 1,
      },
      {
        id: 3,
        name: 'Sneakers',
        price: 200,
        amount: 1,
      },
    ];
  }
}
