import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  KeyValueDiffers,
  OnInit,
  Output,
} from '@angular/core';

import { ProductCartModel } from '../../../products/models/products.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit, DoCheck {
  @Input() product: ProductCartModel;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  private differ: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private differs: KeyValueDiffers,
  ) { }

  ngOnInit(): void {
    this.differ = this.differs.find(this.product).create();
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.product);

    if (changes) {
      this.cdr.markForCheck();
    }
  }

  onChange(quantity: string ): void {
    this.quantityChange.emit(+quantity);
  }

  onDeleteClick(): void {
    this.delete.emit(this.product.id);
  }
}
