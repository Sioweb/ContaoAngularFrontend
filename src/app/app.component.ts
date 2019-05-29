import { Page } from './contao/models/Page';
import { ApiService } from './../services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  page: Page = new Page;

  constructor(private api: ApiService)
  {
    this.api.getPage().subscribe((data: Page) => {
      this.page = data;
    });
  }
}
