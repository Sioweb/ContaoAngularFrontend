import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Element } from './Element';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html'
})
export class FormElementComponent extends Element implements OnInit {

  constructor(
    private host: ElementRef
  ) {
    super();
  }
  ngOnInit() {

    this.host.nativeElement.innerHTML = this.data['fields'];
  }

}
