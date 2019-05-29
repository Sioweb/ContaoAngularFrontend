import * as ElementComponents from './../../elements/ElementMapper';
import { ContentElement } from './../../models/ContentElement';
import { Component, Input, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-content-element',
  templateUrl: './content-element.component.html'
})
export class ContentElementComponent implements OnInit {

  contentElement: ContentElement = new ContentElement;

  @ViewChild('dynamicElement', {read: ViewContainerRef})
  dynamicElement: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  @Input() set inputContentElement(contentElement) {
    this.contentElement = contentElement;

    if(ElementComponents[this.contentElement.type] === undefined) {
      this.contentElement.type = 'text';
    }

    if(!this.contentElement.invisible) {
      let componentFactory = this.resolver.resolveComponentFactory(ElementComponents[this.contentElement.type]);
      this.dynamicElement.clear();
      let cretedFactory = this.dynamicElement.createComponent(componentFactory);
      (<{data: ContentElement}>cretedFactory.instance).data = this.contentElement;
    }
  }

  ngOnInit() {
  }

}
