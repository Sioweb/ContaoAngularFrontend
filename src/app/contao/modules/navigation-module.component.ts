import { Module } from './Module';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navigation-module',
  templateUrl: './navigation-module.component.html',
  styles: []
})
export class NavigationModuleComponent extends Module implements OnInit {

  constructor(protected renderer: Renderer2) {
    super(renderer);
  }

  ngOnInit() {
    const headlineRef = this.headlineRef.nativeElement;
    const headline = document.createElement(this.data.hl);
    headline.innerHTML = this.data.headline;
    headlineRef.parentNode.replaceChild(headline, headlineRef);

    const itemsRef = this.itemsRef.nativeElement;
    const items = document.createElement('div');

    items.innerHTML = this.data.items.trim();
    itemsRef.parentNode.replaceChild(items.firstChild, itemsRef);
  }
}
