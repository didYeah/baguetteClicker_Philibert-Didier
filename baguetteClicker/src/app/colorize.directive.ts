import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[colorize]'
})
export class ColorizeDirective {

  constructor(private elem: ElementRef) {}

  @HostListener('mouseover')
  onMouseOver() {
    this.changeColor('var(--bread-count)');
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.changeColor('var(--clear-text)');
  }

  // Création de la propriété "changeColor"
  private changeColor(color: string) {
    this.elem.nativeElement.style.color = color;
  }
}
