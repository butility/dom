import { create as createElement } from '@/core/element';
import { setAttributeOrChildren } from '@/utils/create-helper';

// List of standard HTML tags
const tags = [
    'button',
    'span',
    'div',
    'a',
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'ul',
    'ol',
    'li',
    'img',
    'input',
    'form',
    'table',
    'tr',
    'td',
    'th',
    'tbody',
    'thead',
    'tfoot',
    'textarea',
    'select',
    'option',
    'section',
    'article',
    'aside',
    'header',
    'footer',
    'nav',
    'main',
    'figure',
    'figcaption',
    'audio',
    'video',
    'source',
    'canvas',
    'details',
    'summary',
    'datalist',
    'fieldset',
    'legend',
    'label',
    'meter',
    'progress',
    'time',
    'output',
    'iframe',
    'object',
    'embed',
    'picture',
    'track',
    'map',
    'area',
    'base',
    'link',
    'style',
    'script',
    'title',
    'meta',
    'abbr',
    'bdi',
    'dialog',
    'mark',
] as const;

// Known HTML elements creation function
function createElementWithAttributes<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    ...attributesOrChildren: any[]
): HTMLElementTagNameMap[K] {
    const element = createElement(tag) as HTMLElementTagNameMap[K];
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Create functions for all known tags
const elements = Object.fromEntries(
    tags.map((tag) => [
        tag,
        (...attributesOrChildren: any[]) =>
            createElementWithAttributes(tag, ...attributesOrChildren),
    ]),
) as Record<
    (typeof tags)[number],
    (...attributesOrChildren: any[]) => HTMLElement
>;

// Function for custom or non-standard elements
export function custom(
    name: string,
    ...attributesOrChildren: any[]
): HTMLUnknownElement {
    const element = createElement(name) as HTMLUnknownElement;
    setAttributeOrChildren(element, ...attributesOrChildren);
    return element;
}

// Special case for body and head
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

export const button = elements.button;
export const span = elements.span;
export const div = elements.div;
export const a = elements.a;
export const p = elements.p;
export const h1 = elements.h1;
export const h2 = elements.h2;
export const h3 = elements.h3;
export const h4 = elements.h4;
export const h5 = elements.h5;
export const h6 = elements.h6;
export const ul = elements.ul;
export const ol = elements.ol;
export const li = elements.li;
export const img = elements.img;
export const input = elements.input;
export const form = elements.form;
export const table = elements.table;
export const tr = elements.tr;
export const td = elements.td;
export const th = elements.th;
export const tbody = elements.tbody;
export const thead = elements.thead;
export const tfoot = elements.tfoot;
export const textarea = elements.textarea;
export const select = elements.select;
export const option = elements.option;
export const section = elements.section;
export const article = elements.article;
export const aside = elements.aside;
export const header = elements.header;
export const footer = elements.footer;
export const nav = elements.nav;
export const main = elements.main;
export const figure = elements.figure;
export const figcaption = elements.figcaption;
export const audio = elements.audio;
export const video = elements.video;
export const source = elements.source;
export const canvas = elements.canvas;
export const details = elements.details;
export const summary = elements.summary;
export const datalist = elements.datalist;
export const fieldset = elements.fieldset;
export const legend = elements.legend;
export const label = elements.label;
export const meter = elements.meter;
export const progress = elements.progress;
export const time = elements.time;
export const output = elements.output;
export const iframe = elements.iframe;
export const object = elements.object;
export const embed = elements.embed;
export const picture = elements.picture;
export const track = elements.track;
export const map = elements.map;
export const area = elements.area;
export const base = elements.base;
export const link = elements.link;
export const style = elements.style;
export const script = elements.script;
export const title = elements.title;
export const meta = elements.meta;
export const abbr = elements.abbr;
export const bdi = elements.bdi;
export const dialog = elements.dialog;
export const mark = elements.mark;
