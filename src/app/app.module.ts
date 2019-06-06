import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './contao/article/article.component';
import { ContentElementComponent } from './contao/article/content-element/content-element.component';
import { TextElementComponent } from './contao/elements/text-element.component';
import { ImageElementComponent } from './contao/elements/image-element.component';
import { PictureElementComponent } from './contao/elements/picture-element.component';
import { NavigationModuleComponent } from './contao/modules/navigation-module.component';
import { ContentModuleComponent } from './contao/article/content-module/content-module.component';
import { HeadlineDirective } from './contao/directives/headline.directive';
import { HtmlElementComponent } from './contao/elements/html-element.component';
import { WrapperElementComponent } from './contao/elements/wrapper-element.component';
import { FormElementComponent } from './contao/elements/form-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ContentElementComponent,
    TextElementComponent,
    ImageElementComponent,
    PictureElementComponent,
    NavigationModuleComponent,
    ContentModuleComponent,
    HeadlineDirective,
    HtmlElementComponent,
    WrapperElementComponent,
    FormElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    WrapperElementComponent,
    FormElementComponent,
    HtmlElementComponent,
    TextElementComponent,
    ImageElementComponent,
    PictureElementComponent,

    NavigationModuleComponent
  ]
})
export class AppModule { }
