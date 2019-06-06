import { Component, OnInit } from '@angular/core';
import { Element } from './Element';

@Component({
  selector: 'app-html-element',
  templateUrl: './html-element.component.html'
})
export class HtmlElementComponent extends Element implements OnInit {

  ngOnInit() {
  }

}
