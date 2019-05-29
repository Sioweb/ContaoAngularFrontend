export class ModuleModel {
    type: string = 'text';
    text: string = '';
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
    src: string = '';
    singleSRC: Object = {};
    picture: Object = {};
    img = {
        src: {}
    }

    items;
    class;
    cssID;
    style;
    request;
    skipId;
    skipNavigation;
    headline;
    hl;
}