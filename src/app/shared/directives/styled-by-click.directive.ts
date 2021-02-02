import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyledByClick]'
})
export class StyledByClickDirective {
  @Input()
  fontSize: string;
  @Input()
  borderColor: string;

  @HostListener('click') onClick(): void {
    this.setFontSize();
    this.setBorderColor();
  }

  constructor(private el: ElementRef, private render: Renderer2) { }

  private setFontSize(): void {
    this.render.setStyle(this.el.nativeElement, 'fontSize', this.fontSize);
  }

  private setBorderColor(): void {
    this.render.setStyle(this.el.nativeElement, 'borderColor', this.borderColor);
  }
}
