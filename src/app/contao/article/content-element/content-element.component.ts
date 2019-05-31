import * as ElementComponents from './../../elements/ElementMapper';
import { ContentElement } from './../../models/ContentElement';
import { Component, Input, ViewContainerRef, ComponentFactoryResolver, ElementRef, EmbeddedViewRef } from '@angular/core';

@Component({
  selector: '[app-content-element]',
  template: ``
})
export class ContentElementComponent {

  contentElement: ContentElement = new ContentElement;

  constructor(
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set inputContentElement(contentElement) {
    this.contentElement = contentElement;

    if(ElementComponents[this.contentElement.type] === undefined) {
      this.contentElement.type = 'text';
    }

    if(!this.contentElement.invisible) {
      let componentFactory = this.resolver.resolveComponentFactory(ElementComponents[this.contentElement.type]);
      let componentRef = this.viewContainerRef.createComponent(componentFactory);
      
      (<{data: ContentElement}>componentRef.instance).data = this.contentElement;
    }
  }
}
