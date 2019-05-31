import * as ModuleComponents from './../../modules/ModuleMapper';
import { ModuleModel } from './../../models/ModuleModel';
import { Component, Input, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: '[app-content-module]',
  template: ``
})
export class ContentModuleComponent {

  contentModule: ModuleModel = new ModuleModel;

  constructor(
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set inputContentElement(contentModule) {
    this.contentModule = contentModule;

    if(ModuleComponents[this.contentModule.type] === undefined) {
      this.contentModule.type = 'text';
    }

    if(!this.contentModule.invisible) {
      let componentFactory = this.resolver.resolveComponentFactory(ModuleComponents[this.contentModule.type]);
      let componentRef = this.viewContainerRef.createComponent(componentFactory);
      
      (<{data: ModuleModel}>componentRef.instance).data = this.contentModule;
    }
  }
}
