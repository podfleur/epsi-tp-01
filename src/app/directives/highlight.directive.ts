import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective   {
  @Input() appHighlight: boolean = false;
  
  constructor(private el: ElementRef) {}
  ngOnChanges(): void {
    if (this.appHighlight) {
      this.el.nativeElement.style.fontWeight = 'bold';
    } else {
      this.el.nativeElement.style.fontWeight = 'normal';
    }
  }
}
