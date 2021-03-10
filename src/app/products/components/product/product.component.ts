import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../models/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  @Output() buy: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onBuy(event: Event): void {
    event.stopPropagation();
    this.buy.emit(this.product.id);
  }

  onEdit(event: Event): void {
    event.stopPropagation();
    this.router.navigate([`/admin/product/edit`, this.product.id]);
  }

  isEditable(): boolean {
    return this.router.url.includes('/admin');
  }
}
