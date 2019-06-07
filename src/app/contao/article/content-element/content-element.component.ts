import * as ElementComponents from './../../elements/ElementMapper';
import { ContentElement } from './../../models/ContentElement';
import { Component, Input, ViewContainerRef, ComponentFactoryResolver, ElementRef, EmbeddedViewRef, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[app-content-element]',
  template: `<ng-content></ng-content>`
})
export class ContentElementComponent {

  contentElement: ContentElement = new ContentElement;

  constructor(
    private resolver: ComponentFactoryResolver,
    private renderer2: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private host: ElementRef
  ) { }

  @Input() set inputContentElement(contentElement) {
    if(contentElement.value === undefined) {
      this.contentElement = contentElement;
    } else {
      this.contentElement = contentElement.value;
    }
    
    if(this.contentElement['length'] !== undefined) {
      return;
    }

    if(this.contentElement.elements !== undefined && this.contentElement.elements.length) {
      let componentFactory = this.resolver.resolveComponentFactory(ElementComponents['wrapper']);
      let componentRef = this.viewContainerRef.createComponent(componentFactory);
      
      (<{data: ContentElement}>componentRef.instance).data = this.contentElement;
      let elementAttributes = {'class': 'class', 'id': 'cssID', 'style': 'style'};

      for(let attr in elementAttributes) {
        if(this.contentElement[elementAttributes[attr]] !== undefined && this.contentElement[elementAttributes[attr]] != null) {
          this.renderer2.setAttribute(componentRef.location.nativeElement, attr, this.contentElement[elementAttributes[attr]]);
        }
      }
      return;
    }

    let Type = this.contentElement.type;
    if((Type === undefined || !Type) && this.contentElement.originalElement !== undefined && this.contentElement.originalElement.type !== undefined) {
      Type = this.contentElement.originalElement.type;
    }
    if(ElementComponents[Type] === undefined) {
      Type = 'html';
    }

    console.log(Type);

    if(!this.contentElement.invisible) {
      
      let componentFactory = this.resolver.resolveComponentFactory(ElementComponents[Type]);
      let componentRef = this.viewContainerRef.createComponent(componentFactory);

      if(this.host.nativeElement.parentNode !== null) {
        this.host.nativeElement.parentNode.removeChild(this.host.nativeElement);
      }

      if(Type === 'html') {
        if(this.contentElement.parsedContent === undefined) {
          return;
        }
        componentRef.location.nativeElement.innerHTML = this.contentElement.parsedContent.trim();
        
        componentRef.location.nativeElement.parentNode.replaceChild(componentRef.location.nativeElement.firstChild, componentRef.location.nativeElement);
        return;
      }
      (<{data: ContentElement}>componentRef.instance).data = this.contentElement;
      let elementAttributes = {'class': 'class', 'id': 'cssID', 'style': 'style'};

      for(let attr in elementAttributes) {
        if(this.contentElement[elementAttributes[attr]] !== undefined && this.contentElement[elementAttributes[attr]] != null) {
          this.renderer2.setAttribute(componentRef.location.nativeElement, attr, this.contentElement[elementAttributes[attr]]);
        }
      }
    }
  }
}
