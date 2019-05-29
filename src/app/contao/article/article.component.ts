import { Article } from './../models/Article';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {

  articles: Array<Article> = [];

  @Input() set inputArticles(articles) {
    this.articles = articles.value;
  }

  constructor() {

  }

  ngOnInit() {
  }

}
