import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYellowText]'
})
export class YellowTextDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'yellow';
  }

}
