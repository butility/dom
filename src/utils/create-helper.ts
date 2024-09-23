import { setAttribute } from '@/core/attribute';

// Helper function to handle attributes and children
export function setAttributeOrChildren(
    element: HTMLElement,
    ...attributesOrChildren: any[]
) {
    attributesOrChildren.forEach((item) => {
        if (typeof item === 'object' && !(item instanceof HTMLElement)) {
            setAttribute(element, item);
        } else if (item instanceof HTMLElement || typeof item === 'string') {
            element.append(item);
        }
    });
}
