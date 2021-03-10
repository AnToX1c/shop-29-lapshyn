import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';

import { Observable, of } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { CanComponentDeactivate } from '../../../core';
import { Product } from '../../models/products.model';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.data.pipe(pluck('product')).subscribe((product: Product) => {
      this.product = { ...product };
      // this.originalProduct = { ...product };
    });

  }

  canDeactivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    const confirmation = window.confirm('Discard changes?');
    return of(confirmation);
  }

  onSave(): void {
    const product = {...this.product};
    if (product.id) {
      console.log('Product was saved');
    } else {
      console.log('Product was created');
    }
    this.router.navigate(['/admin/products']);
  }
}
