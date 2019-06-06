import { Component, OnInit, Input } from '@angular/core';
import { Element } from './Element';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html'
})
export class FormElementComponent extends Element implements OnInit {

  @Input() set inputContentElement(contentElement) {
  }
  
  ngOnInit() {
    // console.log('FORM', this.data);
  }

}
