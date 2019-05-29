import { ContentElement } from './ContentElement';

export class Article {
    content: Array<ContentElement> = [];
    published: boolean = false;
    modulType: string = 'article';
}