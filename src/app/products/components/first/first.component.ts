import { Component, OnInit } from '@angular/core';

import { ProductModel, Products } from '../../models/products.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  firstProduct: ProductModel[] = [{
    id: 0,
    name: 'Hublot Big Bang Original',
    description: 'Made in Switzerland, Production date: 2021, Steel Ceramic',
    price: 12500,
    category: Products.Luxury,
    isAvailable: true,
  }];

  constructor() { }

  ngOnInit(): void {
  }
}
