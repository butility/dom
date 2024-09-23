import type {
    SelectionOptions,
    ParentOptions,
    ChildrenOptions,
    SiblingOptions,
    ClosestOptions,
    FindAllOptions,
} from '@/types/dom';

export function selectElem<T extends HTMLElement>(
    selector: string,
    options?: SelectionOptions<T>,
): T[] | T | null {
    const elements = Array.from(document.querySelectorAll<T>(selector));

    // Filter elements based on the options provided
    let filteredElements = elements;

    if (options?.attribute && options.value) {
        filteredElements = filteredElements.filter(
            (element) =>
                element.getAttribute(options.attribute as string) ===
                options.value,
        );
    }

    if (options?.className) {
        filteredElements = filteredElements.filter((element) =>
            element.classList.contains(options.className as any),
        );
    }

    if (options?.tagName) {
        filteredElements = filteredElements.filter(
            (element) =>
                element.tagName.toLowerCase() ===
                (options.tagName as any).toLowerCase(),
        );
    }

    // Filter by custom attributes
    if (options?.customAttributes) {
        for (const [attr, val] of Object.entries(options.customAttributes)) {
            filteredElements = filteredElements.filter(
                (element) => element.getAttribute(attr) === val,
            );
        }
    }

    // Filter by data attributes
    if (options?.dataAttributes) {
        for (const [dataAttr, val] of Object.entries(options.dataAttributes)) {
            filteredElements = filteredElements.filter(
                (element) => element.dataset[dataAttr] === val,
            );
        }
    }

    // Filter by inner text
    if (options?.innerText) {
        filteredElements = filteredElements.filter(
            (element) =>
                element.textContent?.includes(options.innerText as any) ||
                false,
        );
    }

    // Filter by inner HTML
    if (options?.innerHTML) {
        filteredElements = filteredElements.filter((element) =>
            element.innerHTML.includes(options.innerHTML as any),
        );
    }

    // Check for child elements
    if (options?.hasChild) {
        filteredElements = filteredElements.filter(
            (element) =>
                element.querySelector(options.hasChild as any) !== null,
        );
    }

    // Apply custom filter callback
    if (options?.filterCallback) {
        filteredElements = filteredElements.filter(options.filterCallback);
    }

    // Order the results if specified
    if (options?.orderBy) {
        filteredElements.sort((a, b) => {
            const aValue = a.textContent || '';
            const bValue = b.textContent || '';
            return options.orderBy === 'asc'
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
        });
    }

    // Limit the results if specified
    if (options?.limit) {
        filteredElements = filteredElements.slice(0, options.limit);
    }

    // Return either single or multiple elements based on options
    if (options?.multiple) {
        return filteredElements.length > 0 ? filteredElements : null;
    } else {
        return filteredElements.length > 0 ? filteredElements[0] : null;
    }
}

export function getParent<T extends HTMLElement>(
    element: T,
    options?: ParentOptions,
): ParentNode | null {
    if (!element) throw new Error('Element cannot be null or undefined.');
    let parent = element.parentNode;

    // Optionally include the document as a parent
    if (options?.includeDocument && parent === document) {
        return document;
    }

    return parent;
}

export function getChildren<T extends HTMLElement>(
    element: T,
    options?: ChildrenOptions,
): T[] {
    if (!element) throw new Error('Element cannot be null or undefined.');
    const children = Array.from(element.children) as T[];

    // Apply filter if provided
    return options?.filter ? children.filter(options.filter) : children;
}

export function getNextSibling<T extends HTMLElement>(
    element: T,
    options?: SiblingOptions,
): T | null {
    if (!element) throw new Error('Element cannot be null or undefined.');
    let sibling = element.nextElementSibling;

    // Optionally skip hidden elements
    while (
        sibling &&
        options?.skipHidden &&
        !(sibling as HTMLElement).offsetWidth &&
        !(sibling as HTMLElement).offsetHeight
    ) {
        sibling = sibling.nextElementSibling;
    }

    return sibling ? (sibling as T) : null;
}

export function getPreviousSibling<T extends HTMLElement>(
    element: T,
    options?: SiblingOptions,
): T | null {
    if (!element) throw new Error('Element cannot be null or undefined.');
    let sibling = element.previousElementSibling;

    // Optionally skip hidden elements
    while (
        sibling &&
        options?.skipHidden &&
        !(sibling as HTMLElement).offsetWidth &&
        !(sibling as HTMLElement).offsetHeight
    ) {
        sibling = sibling.previousElementSibling;
    }

    return sibling ? (sibling as T) : null;
}

export function getClosest<T extends HTMLElement>(
    element: T,
    selector: string,
    options?: ClosestOptions,
): T | null {
    if (!element) throw new Error('Element cannot be null or undefined.');
    let current: HTMLElement | null = element;

    while (current && current !== options?.stopAt) {
        if (current.matches(selector)) {
            return current as T;
        }
        current = current.parentElement;
    }

    return null;
}

export function findAll<T extends HTMLElement>(
    element: T,
    selector: string,
    options?: FindAllOptions,
): T[] {
    if (!element) throw new Error('Element cannot be null or undefined.');
    let foundElements = Array.from(element.querySelectorAll(selector)) as T[];

    // Remove duplicates if requested
    if (options?.unique) {
        foundElements = Array.from(new Set(foundElements));
    }

    // Limit results if requested
    if (options?.limit && options.limit < foundElements.length) {
        return foundElements.slice(0, options.limit);
    }

    return foundElements;
}
