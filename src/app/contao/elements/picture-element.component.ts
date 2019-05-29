import { Component, OnInit } from '@angular/core';
import { ElementPicture } from './ElementPicture';

@Component({
  selector: 'app-picture-element',
  templateUrl: './picture-element.component.html'
})
export class PictureElementComponent extends ElementPicture implements OnInit {

  ngOnInit() {
  }

}
