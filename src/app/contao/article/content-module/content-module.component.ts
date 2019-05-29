import * as ModuleComponents from './../../modules/ModuleMapper';
import { ModuleModel } from './../../models/ModuleModel';
import { Component, Input, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-content-module',
  templateUrl: './content-module.component.html'
})
export class ContentModuleComponent implements OnInit {

  contentElement: ModuleModel = new ModuleModel;

  @ViewChild('dynamicElement', {read: ViewContainerRef})
  dynamicElement: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  @Input() set inputContentElement(contentElement) {
    this.contentElement = contentElement;

    console.log(this.contentElement);

    if(ModuleComponents[this.contentElement.type] === undefined) {
      this.contentElement.type = 'text';
    }

    if(!this.contentElement.invisible) {
      let componentFactory = this.resolver.resolveComponentFactory(ModuleComponents[this.contentElement.type]);
      this.dynamicElement.clear();
      let cretedFactory = this.dynamicElement.createComponent(componentFactory);
      (<{data: ModuleModel}>cretedFactory.instance).data = this.contentElement;
    }
  }

  ngOnInit() {
  }

}
