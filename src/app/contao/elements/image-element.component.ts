import { Component, OnInit } from '@angular/core';
import { ElementImage } from './ElementImage';

@Component({
  selector: 'app-image-element',
  templateUrl: './image-element.component.html'
})
export class ImageElementComponent extends ElementImage implements OnInit {

  ngOnInit() {
  }

}
