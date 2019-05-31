import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'directive-headline'
})
export class HeadlineDirective {

  @Input() data;

  constructor(elr:ElementRef) {    
    var myAnchor = elr.nativeElement;
    var mySpan = document.createElement("h1");
    mySpan.innerHTML = "replaced anchor!";
    myAnchor.parentNode.replaceChild(mySpan, myAnchor);
  }

}
