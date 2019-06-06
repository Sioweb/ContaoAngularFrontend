import { Component, OnInit } from '@angular/core';
import { Element } from './Element';

@Component({
  selector: 'app-wrapper-element',
  template: `<ng-content></ng-content>`
})
export class WrapperElementComponent extends Element implements OnInit {

  ngOnInit() {
    this.data.class += ' col-lg';
    
    console.log('Wrapper', this.data);
  }

}
