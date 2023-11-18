import { IMemeSearchResult } from "../interfaces/i-meme-search-result";

export class MemeSearch implements IMemeSearchResult{
    _self: string;
    blank: string;
    example: { text: string[]; url: string };
    id: string;
    keywords: string[];
    lines: number;
    name: string;
    overlays: number;
    source: string;
    styles: string[];

    constructor(meme: IMemeSearchResult) {
        this._self = meme._self;
        this.blank = meme.blank;
        this.example = meme.example;
        this.id = meme.id;
        this.keywords = meme.keywords;
        this.lines = meme.lines;
        this.name = meme.name;
        this.overlays = meme.overlays;
        this.source = meme.source;
        this.styles = meme.styles;
    }
}
