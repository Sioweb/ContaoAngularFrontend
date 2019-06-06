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
    class: string = null;
    cssID: string = null;
    style: string = null;

    elements: Array<any> = [];

    wrapperElement: Array<any> = [];
    originalElement: ContentElement;
    parsedContent: string = '';
    
    sources;
    src;
    singleSRC: Object = {};
    picture: Object = {};
    img = {
        src: {}
    }
}