import { Component, OnInit } from '@angular/core';
import { Element } from './Element';

@Component({
  selector: 'app-wrapper-element',
  templateUrl: './wrapper-element.component.html'
})
export class WrapperElementComponent extends Element implements OnInit {

  ngOnInit() {
    this.data.class += ' col-lg';
  }

}
