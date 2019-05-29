import { Component, OnInit } from '@angular/core';
import { Element } from './Element';

@Component({
  selector: 'app-text-element',
  templateUrl: './text-element.component.html'
})
export class TextElementComponent extends Element implements OnInit {

  ngOnInit() {
  }

}
