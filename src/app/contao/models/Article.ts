import { ContentElement } from './ContentElement';

export class Article {
    content: Array<ContentElement> = [];
    published: boolean = false;
    moduleType: string = 'article';
    elements: Array<any> = [];
    items: string = '';

    class: string = null;
    cssID: string = null;
    style: string = null;
}