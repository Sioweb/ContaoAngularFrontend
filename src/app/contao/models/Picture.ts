import { PictureSource } from './PictureSource';
import { Image } from './Image';

export class Picture {
    alt: string;
    img: Image;
    srcset: string = null;
    sources: Array<PictureSource> = null;
}