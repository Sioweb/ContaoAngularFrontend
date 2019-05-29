import { Picture } from './../models/Picture';
import { Input } from '@angular/core';

export class ElementPicture {
  @Input() data: Picture = new Picture;
}