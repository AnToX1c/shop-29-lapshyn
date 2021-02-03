# Changelog
### Task 4 (03/02/2021)
 1. Built-in CurrencyPipe, UpperCasePipe pipes are used in the cart-list.component, product.component, cart-item.component
 2. AsyncPipe is used in the product-list.component. Method getProducts() returns Observable.
 3. OrderByPipe is used in the cart-list.component.
 4. CommonModule was moved to the SharedModule.

### Task 3 (02/02/2021)
 1. Modified CartService
 2. Created ConfigOptionsService, ConstantsService, LocalStorageService.
 3. Registered GeneratorFactory with '*generatedString*' token, useFactory & deps
 4. Added directive `appStyledByClick` with @Input() + HostListener + ElementRef + Renderer2 to the `div.product`

### Task 2 (26/01/2021)
 1. CartModule, ProductsModule, OrdersModule, SharedModule were created
 2. Added item to cart by click
 3. Counting (through the CartService) and display the number and amount of purchased goods
 4. Implemented changing the quantity of goods and removing an item from the cart.
 5. Usage @Input, @Output, OnPush strategy; hooks: OnInit, OnDestroy, DoCheck, AfterViewInit; DOM events: click, change
 6. HighlightDirective was implemented with @HostBinding, @HostListener.

### Task 1 (17/01/2021)

   - Init project;
   - Added `ng lint --fix && ng serve -o`;
   - Created: `FirstComponent`, `ProductComponent`, `ProductsService`, `ProductListComponent`,
     `ProductModel` (with interface, enum and class),
     `CartListComponent` (with `*ngIf + else`) and
     `CartService` (with `trackBy`).
