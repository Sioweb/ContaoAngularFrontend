import { Image } from './../models/Image';
import { Input } from '@angular/core';

export class ElementImage {
  @Input() data: Image = new Image;
}