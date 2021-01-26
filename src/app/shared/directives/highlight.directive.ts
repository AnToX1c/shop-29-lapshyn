import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('class') className = '';
  @HostListener('mouseenter', ['$event']) onMouseEnter(): void {
    this.className = 'highlighted';
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.className = '';
  }

  constructor() { }

}
