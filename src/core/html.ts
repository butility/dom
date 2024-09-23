import { create as createElement } from '@/core/element';
import { setAttributeOrChildren } from '@/utils/create-helper';

// Button Element
export function button(...attributesOrChildren: any[]): HTMLButtonElement {
    const element = createElement('button') as HTMLButtonElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Span Element
export function span(...attributesOrChildren: any[]): HTMLSpanElement {
    const element = createElement('span') as HTMLSpanElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Div Element
export function div(...attributesOrChildren: any[]): HTMLDivElement {
    const element = createElement('div') as HTMLDivElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Anchor (Link) Element
export function a(...attributesOrChildren: any[]): HTMLAnchorElement {
    const element = createElement('a') as HTMLAnchorElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Paragraph Element
export function p(...attributesOrChildren: any[]): HTMLParagraphElement {
    const element = createElement('p') as HTMLParagraphElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Header Elements (h1, h2, h3, h4, h5, h6)
export function h1(...attributesOrChildren: any[]): HTMLHeadingElement {
    const element = createElement('h1') as HTMLHeadingElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

export function h2(...attributesOrChildren: any[]): HTMLHeadingElement {
    const element = createElement('h2') as HTMLHeadingElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

export function h3(...attributesOrChildren: any[]): HTMLHeadingElement {
    const element = createElement('h3') as HTMLHeadingElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

export function h4(...attributesOrChildren: any[]): HTMLHeadingElement {
    const element = createElement('h4') as HTMLHeadingElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

export function h5(...attributesOrChildren: any[]): HTMLHeadingElement {
    const element = createElement('h5') as HTMLHeadingElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

export function h6(...attributesOrChildren: any[]): HTMLHeadingElement {
    const element = createElement('h6') as HTMLHeadingElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Unordered List Element
export function ul(...attributesOrChildren: any[]): HTMLUListElement {
    const element = createElement('ul') as HTMLUListElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Ordered List Element
export function ol(...attributesOrChildren: any[]): HTMLOListElement {
    const element = createElement('ol') as HTMLOListElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// List Item Element
export function li(...attributesOrChildren: any[]): HTMLLIElement {
    const element = createElement('li') as HTMLLIElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Image Element
export function img(...attributesOrChildren: any[]): HTMLImageElement {
    const element = createElement('img') as HTMLImageElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Input Element
export function input(...attributesOrChildren: any[]): HTMLInputElement {
    const element = createElement('input') as HTMLInputElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Form Element
export function form(...attributesOrChildren: any[]): HTMLFormElement {
    const element = createElement('form') as HTMLFormElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Table Element
export function table(...attributesOrChildren: any[]): HTMLTableElement {
    const element = createElement('table') as HTMLTableElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Table Row Element
export function tr(...attributesOrChildren: any[]): HTMLTableRowElement {
    const element = createElement('tr') as HTMLTableRowElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Table Data Cell Element
export function td(...attributesOrChildren: any[]): HTMLTableCellElement {
    const element = createElement('td') as HTMLTableCellElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Table Header Cell Element
export function th(...attributesOrChildren: any[]): HTMLTableCellElement {
    const element = createElement('th') as HTMLTableCellElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Table Body
export function tbody(...attributesOrChildren: any[]): HTMLTableSectionElement {
    const element = createElement('tbody') as HTMLTableSectionElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Table Head
export function thead(...attributesOrChildren: any[]): HTMLTableSectionElement {
    const element = createElement('thead') as HTMLTableSectionElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Table Footer
export function tfoot(...attributesOrChildren: any[]): HTMLTableSectionElement {
    const element = createElement('tfoot') as HTMLTableSectionElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Textarea Element
export function textarea(...attributesOrChildren: any[]): HTMLTextAreaElement {
    const element = createElement('textarea') as HTMLTextAreaElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Select Element
export function select(...attributesOrChildren: any[]): HTMLSelectElement {
    const element = createElement('select') as HTMLSelectElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Option Element for Select
export function option(...attributesOrChildren: any[]): HTMLOptionElement {
    const element = createElement('option') as HTMLOptionElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Section Element
export function section(...attributesOrChildren: any[]): HTMLElement {
    const element = createElement('section') as HTMLElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Article Element
export function article(...attributesOrChildren: any[]): HTMLElement {
    const element = createElement('article') as HTMLElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Aside Element
export function aside(...attributesOrChildren: any[]): HTMLElement {
    const element = createElement('aside') as HTMLElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Header Element
export function header(...attributesOrChildren: any[]): HTMLElement {
    const element = createElement('header') as HTMLElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Footer Element
export function footer(...attributesOrChildren: any[]): HTMLElement {
    const element = createElement('footer') as HTMLElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Nav Element
export function nav(...attributesOrChildren: any[]): HTMLElement {
    const element = createElement('nav') as HTMLElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Main Element
export function main(...attributesOrChildren: any[]): HTMLElement {
    const element = createElement('main') as HTMLElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Figure Element
export function figure(...attributesOrChildren: any[]): HTMLElement {
    const element = createElement('figure') as HTMLElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Figcaption Element
export function figcaption(...attributesOrChildren: any[]): HTMLElement {
    const element = createElement('figcaption') as HTMLElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Audio Element
export function audio(...attributesOrChildren: any[]): HTMLAudioElement {
    const element = createElement('audio') as HTMLAudioElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Video Element
export function video(...attributesOrChildren: any[]): HTMLVideoElement {
    const element = createElement('video') as HTMLVideoElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Source Element for Audio/Video
export function source(...attributesOrChildren: any[]): HTMLSourceElement {
    const element = createElement('source') as HTMLSourceElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Canvas Element
export function canvas(...attributesOrChildren: any[]): HTMLCanvasElement {
    const element = createElement('canvas') as HTMLCanvasElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Details Element
export function details(...attributesOrChildren: any[]): HTMLDetailsElement {
    const element = createElement('details') as HTMLDetailsElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Summary Element for Details
export function summary(...attributesOrChildren: any[]): HTMLElement {
    const element = createElement('summary') as HTMLElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// DataList Element
export function datalist(...attributesOrChildren: any[]): HTMLDataListElement {
    const element = createElement('datalist') as HTMLDataListElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Fieldset Element
export function fieldset(...attributesOrChildren: any[]): HTMLFieldSetElement {
    const element = createElement('fieldset') as HTMLFieldSetElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Legend Element
export function legend(...attributesOrChildren: any[]): HTMLLegendElement {
    const element = createElement('legend') as HTMLLegendElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Label Element
export function label(...attributesOrChildren: any[]): HTMLLabelElement {
    const element = createElement('label') as HTMLLabelElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Meter Element
export function meter(...attributesOrChildren: any[]): HTMLMeterElement {
    const element = createElement('meter') as HTMLMeterElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Progress Element
export function progress(...attributesOrChildren: any[]): HTMLProgressElement {
    const element = createElement('progress') as HTMLProgressElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Time Element
export function time(...attributesOrChildren: any[]): HTMLTimeElement {
    const element = createElement('time') as HTMLTimeElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Output Element
export function output(...attributesOrChildren: any[]): HTMLOutputElement {
    const element = createElement('output') as HTMLOutputElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Iframe Element
export function iframe(...attributesOrChildren: any[]): HTMLIFrameElement {
    const element = createElement('iframe') as HTMLIFrameElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Object Element
export function object(...attributesOrChildren: any[]): HTMLObjectElement {
    const element = createElement('object') as HTMLObjectElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Embed Element
export function embed(...attributesOrChildren: any[]): HTMLEmbedElement {
    const element = createElement('embed') as HTMLEmbedElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Picture Element
export function picture(...attributesOrChildren: any[]): HTMLPictureElement {
    const element = createElement('picture') as HTMLPictureElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Track Element for Video/Audio
export function track(...attributesOrChildren: any[]): HTMLTrackElement {
    const element = createElement('track') as HTMLTrackElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Map Element
export function map(...attributesOrChildren: any[]): HTMLMapElement {
    const element = createElement('map') as HTMLMapElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Area Element for Map
export function area(...attributesOrChildren: any[]): HTMLAreaElement {
    const element = createElement('area') as HTMLAreaElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Base Element
export function base(...attributesOrChildren: any[]): HTMLBaseElement {
    const element = createElement('base') as HTMLBaseElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Link Element for external resources (like CSS files)
export function link(...attributesOrChildren: any[]): HTMLLinkElement {
    const element = createElement('link') as HTMLLinkElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Style Element
export function style(...attributesOrChildren: any[]): HTMLStyleElement {
    const element = createElement('style') as HTMLStyleElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Script Element
export function script(...attributesOrChildren: any[]): HTMLScriptElement {
    const element = createElement('script') as HTMLScriptElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Title Element for document titles
export function title(...attributesOrChildren: any[]): HTMLTitleElement {
    const element = createElement('title') as HTMLTitleElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Meta Element for document metadata
export function meta(...attributesOrChildren: any[]): HTMLMetaElement {
    const element = createElement('meta') as HTMLMetaElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Abbr Element
export function abbr(...attributesOrChildren: any[]): HTMLElement {
    const element = createElement('abbr');
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Bdi Element
export function bdi(...attributesOrChildren: any[]): HTMLElement {
    const element = createElement('bdi');
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Dialog Element
export function dialog(...attributesOrChildren: any[]): HTMLDialogElement {
    const element = createElement('dialog') as HTMLDialogElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Mark Element
export function mark(...attributesOrChildren: any[]): HTMLElement {
    const element = createElement('mark');
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Wbi Element
export function wbi(...attributesOrChildren: any[]): HTMLElement {
    const element = createElement('wbi');
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

export function custom(
    name: string,
    ...attributesOrChildren: any[]
): HTMLUnknownElement {
    const element = createElement(name) as HTMLUnknownElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

export function body(
    ...attributesOrChildren: ({} | HTMLElement)[]
): HTMLBodyElement {
    setAttributeOrChildren(document.body, ...attributesOrChildren);
    return document.body as HTMLBodyElement;
}

export function head(
    ...attributesOrChildren: ({} | HTMLElement)[]
): HTMLHeadElement {
    setAttributeOrChildren(document.head, ...attributesOrChildren);
    return document.head as HTMLHeadElement;
}
