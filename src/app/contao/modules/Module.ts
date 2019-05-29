import { ModuleModel } from './../models/ModuleModel';
import { Input, ViewChild, ElementRef, OnInit, Renderer2 } from '@angular/core';

export class Module implements OnInit {
  @Input() data: ModuleModel = new ModuleModel;

  @ViewChild('headline') headlineRef: ElementRef;
  @ViewChild('items') itemsRef: ElementRef;

  constructor(protected renderer: Renderer2) {

  }

  ngOnInit() {
  }

}