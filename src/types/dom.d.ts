// Attributes
export interface CompareAttributesOptions {
    onTrue?: (
        attrName: string,
        el1Value: string | null,
        el2Value: string | null,
    ) => void;
    onFalse?: (
        attrName: string,
        el1Value: string | null,
        el2Value: string | null,
    ) => void;
    ignoreAttributes?: string[]; // Attributes to ignore during comparison
    customCompare?: (
        el1Value: string | null,
        el2Value: string | null,
    ) => boolean; // Custom comparison logic
}

export interface RemoveAttributesByPrefixOptions {
    onRemove?: (attrName: string) => void;
    protectedAttr?: string[];
}

export interface SetAttributesOptions {
    whitelist?: string[];
    blacklist?: string[];
    validate?: (key: string, value: string) => boolean;
    transformValue?: (key: string, value: string) => string;
    addPrefix?: string;
    onAttributeSet?: (attributes: object) => void;
    onError?: (error: Error) => void;
    log?: boolean;
}

export interface GetAttributeOptions {
    dataPrefix?: boolean;
    defaultValue?: string;
    transform?: (value: string | null) => string | null;
}

export type CompareAttributesResult = Record<
    string,
    { el1Value: string | null; el2Value: string | null }
>;

// Element
export interface CreateElementOptions {
    class?: string[];
    attr?: { [s: string]: string };
    innerText?: string;
    innerHTML?: string;
    children?: HTMLElement[];
    draggable?: boolean;
    style?: string;
    trackMutation?: boolean;
}

// Traverse
export interface SelectionOptions<T> {
    attribute?: keyof T; // Attribute to filter elements by
    value?: string; // Value to match the attribute against
    className?: string; // Class name to filter by
    tagName?: keyof HTMLElementTagNameMap; // Tag name to filter by
    customAttributes?: Record<string, string>; // Custom attributes for filtering
    dataAttributes?: Record<string, string>; // Data attributes for filtering
    innerText?: string; // Filter by inner text
    innerHTML?: string; // Filter by inner HTML
    hasChild?: (childSelector: string) => boolean; // Check for specific child elements
    filterCallback?: (element: T) => boolean; // Custom filter function
    multiple?: boolean; // Allow selection of multiple elements
    orderBy?: 'asc' | 'desc'; // Order by a specific criteria
    limit?: number; // Limit the number of results
}

export interface ParentOptions {
    includeDocument?: boolean;
}

export interface ChildrenOptions {
    filter?: (element: HTMLElement) => boolean;
}

export interface SiblingOptions {
    skipHidden?: boolean;
}

export interface ClosestOptions {
    stopAt?: HTMLElement;
}

export interface FindAllOptions {
    unique?: boolean;
    limit?: number;
}

// Events
export type EventHandler = (event: Event) => void;
