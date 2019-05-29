export class ContentElement {
    type: string = 'text';
    text;
    addBefore: boolean;
    floatClass: string;
    margin: string;
    href: string;
    linkTitle: string;
    attributes: string = '';
    caption: string;
    addImage: number = 0;
    invisible: boolean = false;

    sources;
    src;
    singleSRC: Object = {};
    picture: Object = {};
    img = {
        src: {}
    }
}