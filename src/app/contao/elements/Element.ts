import { ContentElement } from './../models/ContentElement';
import { Input } from '@angular/core';

export class Element {
  @Input() data: ContentElement = new ContentElement;
}