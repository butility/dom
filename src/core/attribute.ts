import {
    RemoveAttributesByPrefixOptions,
    CompareAttributesOptions,
    SetAttributesOptions,
    GetAttributeOptions,
    CompareAttributesResult,
} from '@/types/dom';

export function setAttribute(
    element: HTMLElement,
    attribute: object,
    options: SetAttributesOptions = {},
): void {
    const {
        whitelist,
        blacklist,
        validate,
        transformValue,
        addPrefix = '', // By default, no prefix is added
        onAttributeSet = () => {}, // Default no-op callback
        onError = (error) => console.error(error), // Default error handler logs to console
        log = false, // Disable logging by default
    } = options;

    let settedAttributes = {};

    try {
        if (!(element instanceof HTMLElement)) {
            throw new TypeError('Provided element is not a valid HTMLElement.');
        }

        if (typeof attribute !== 'object') {
            throw new Error('Attribute name must be a non-empty string.');
        }

        const shouldSetAttribute = (key: string): boolean => {
            if (whitelist && !whitelist.includes(key)) return false;
            if (blacklist && blacklist.includes(key)) return false;
            return true;
        };

        for (const [attributeName, attributeValue] of Object.entries(
            attribute,
        )) {
            try {
                const finalAttributeName = addPrefix
                    ? `${addPrefix}${attributeName}`
                    : attributeName;

                if (!shouldSetAttribute(finalAttributeName)) {
                    if (log)
                        console.log(
                            `Skipping attribute: ${finalAttributeName}`,
                        );
                    return;
                }

                if (validate && !validate(finalAttributeName, attributeValue)) {
                    throw new Error(
                        `Validation failed for attribute: ${finalAttributeName} with value: ${attributeValue}`,
                    );
                }

                const transformedValue = transformValue
                    ? transformValue(finalAttributeName, attributeValue)
                    : attributeValue;

                if (/^data-/.test(finalAttributeName)) {
                    const dataKey = finalAttributeName.slice(5);
                    element.dataset[dataKey] = transformedValue;
                    if (log)
                        console.log(
                            `Set data attribute: data-${dataKey} = ${transformedValue}`,
                        );
                } else {
                    element.setAttribute(finalAttributeName, transformedValue);
                    if (log)
                        console.log(
                            `Set attribute: ${finalAttributeName} = ${transformedValue}`,
                        );
                }

                Object.defineProperty(settedAttributes, finalAttributeName, {
                    value: transformedValue,
                    writable: true,
                    enumerable: true,
                    configurable: true,
                });
            } catch (error: any) {
                onError(error);
            }
        }

        // Call the callback after setting the attribute
        onAttributeSet(settedAttributes);
    } catch (error: any) {
        onError(error);
    }
}

export function removeAttribute(
    element: HTMLElement,
    attributeName: string,
): void {
    if (!element || !(element instanceof HTMLElement)) {
        throw new Error('Invalid HTMLElement provided.');
    }

    if (/^data-/.test(attributeName)) {
        delete element.dataset[attributeName.slice(5)];
    } else if (element.hasAttribute(attributeName)) {
        element.removeAttribute(attributeName);
    } else {
        console.warn(`Attribute "${attributeName}" does not exist on`, element);
    }
}

export function getAttribute(
    element: HTMLElement,
    attributeName: string,
    options?: GetAttributeOptions,
): Record<string, string | null> {
    if (!element || !(element instanceof HTMLElement)) {
        throw new Error('Invalid HTMLElement provided.');
    }

    const result: Record<string, string | null> = {};
    let value: string | null;

    // Determine if the attribute is a data-* attribute
    if (options?.dataPrefix && /^data-/.test(attributeName)) {
        value = element.dataset[attributeName.slice(5)] || null;
    } else {
        value = element.getAttribute(attributeName);
    }

    if (options?.transform) {
        value = options.transform(value);
    }

    result[attributeName] =
        value !== null ? value : options?.defaultValue || null;

    return result;
}

export function getAllAttributes(element: HTMLElement): Record<string, string> {
    if (!element || !(element instanceof HTMLElement)) {
        throw new Error('Invalid HTMLElement provided.');
    }
    const attributes: Record<string, string> = {};

    // Get all regular attributes
    Array.from(element.attributes).forEach((attr) => {
        attributes[attr.name] = attr.value;
    });

    // Include dataset (data-* attributes)
    Object.keys(element.dataset).forEach((dataKey) => {
        const dataValue = element.dataset[dataKey];
        if (dataValue !== undefined) {
            attributes[`data-${dataKey}`] = dataValue;
        }
    });

    return attributes;
}

export function hasAttribute(
    element: HTMLElement,
    attributeName: string,
): boolean {
    if (!element || !(element instanceof HTMLElement)) {
        throw new Error('Invalid HTMLElement provided.');
    }

    return /^data-/.test(attributeName)
        ? attributeName.slice(5) in element.dataset
        : element.hasAttribute(attributeName);
}

export function toggleAttribute(
    element: HTMLElement,
    attributeName: string,
    attributeValue: string | boolean,
): void {
    if (!element || !(element instanceof HTMLElement)) {
        throw new Error('Invalid HTMLElement provided.');
    }

    if (hasAttribute(element, attributeName)) {
        removeAttribute(element, attributeName);
    } else {
        setAttribute(element, {
            [attributeName]: attributeValue,
        });
    }
}

export function removeAllAttributes(element: HTMLElement): void {
    if (!element || !(element instanceof HTMLElement)) {
        throw new Error('Invalid HTMLElement provided.');
    }

    Array.from(element.attributes).forEach((attr) => {
        element.removeAttribute(attr.name);
    });

    // Remove dataset (data-* attributes)
    Object.keys(element.dataset).forEach((dataKey) => {
        delete element.dataset[dataKey];
    });
}

export function attributesToQueryString(element: HTMLElement): string {
    if (!element || !(element instanceof HTMLElement)) {
        throw new Error('Invalid HTMLElement provided.');
    }

    const attributes = Array.from(element.attributes);
    return attributes
        .map(
            (attr) =>
                `${encodeURIComponent(attr.name)}=${encodeURIComponent(attr.value)}`,
        )
        .join('&');
}

export function copyAttributes(
    element: HTMLElement,
    target: HTMLElement,
): void {
    if (
        !element ||
        !(element instanceof HTMLElement) ||
        !target ||
        !(target instanceof HTMLElement)
    ) {
        throw new Error('Invalid HTMLElement provided.');
    }
    Array.from(element.attributes).forEach((attr) => {
        setAttribute(target, { [attr.name]: attr.value });
    });
}

export function findElementByAttribute(
    Element: HTMLElement,
    attributeName: string,
): HTMLElement[] {
    return Array.from(
        Element.querySelectorAll(`[${attributeName}]`),
    ) as HTMLElement[];
}

export function toggleAttributes(
    element: HTMLElement,
    attributes: Record<string, boolean>,
): void {
    Object.keys(attributes).forEach((attr) => {
        if (attributes[attr]) {
            element.setAttribute(attr, '');
        } else {
            element.removeAttribute(attr);
        }
    });
}

export function hasAnyAttributes(element: HTMLElement): boolean {
    return element.attributes.length > 0;
}

export function removeAttributesByName(
    element: HTMLElement,
    ...attributeNames: string[]
): void {
    attributeNames.forEach((attr) => {
        element.removeAttribute(attr);
    });
}

export function getAttributesByPrefix(
    element: HTMLElement,
    prefix: string,
): Record<string, string> {
    const result: Record<string, string> = {};
    Array.from(element.attributes).forEach((attr) => {
        if (attr.name.startsWith(prefix)) {
            result[attr.name] = attr.value;
        }
    });
    return result;
}

export function setAttributesFromQueryString(
    element: HTMLElement,
    queryString: string,
    options: SetAttributesOptions = {},
): void {
    const { onError = (error) => console.error(error) } = options;

    try {
        if (!(element instanceof HTMLElement)) {
            throw new TypeError('Provided element is not a valid HTMLElement.');
        }

        if (typeof queryString !== 'string' || !queryString.trim()) {
            throw new Error(
                'Invalid queryString provided. It must be a non-empty string.',
            );
        }

        const params = new URLSearchParams(queryString);
        try {
            setAttribute(element, params, options);
        } catch (attrError: any) {
            onError(attrError);
        }
    } catch (error: any) {
        onError(error);
    }
}

export function compareAttributes(
    el1: HTMLElement,
    el2: HTMLElement,
    options: CompareAttributesOptions = {},
): CompareAttributesResult {
    const diff: CompareAttributesResult = {};

    try {
        if (!(el1 instanceof HTMLElement) || !(el2 instanceof HTMLElement)) {
            throw new TypeError('Both el1 and el2 must be valid HTMLElements.');
        }

        const el1Attributes = el1.attributes;
        const el2Attributes = el2.attributes;

        const {
            onTrue = () => {}, // Default no-op callback if not provided
            onFalse = () => {}, // Default no-op callback if not provided
            ignoreAttributes = [],
            customCompare,
        } = options;

        const shouldIgnore = (attrName: string) =>
            ignoreAttributes.includes(attrName);

        // Compare attributes in el1
        Array.from(el1Attributes).forEach((attr) => {
            const el2Value = el2.getAttribute(attr.name);

            if (shouldIgnore(attr.name)) return;

            const isEqual = customCompare
                ? customCompare(attr.value, el2Value)
                : attr.value === el2Value;

            if (!isEqual) {
                diff[attr.name] = { el1Value: attr.value, el2Value: el2Value };
                onFalse(attr.name, attr.value, el2Value); // Call onFalse when attributes differ
            } else {
                onTrue(attr.name, attr.value, el2Value); // Call onTrue when attributes match
            }
        });

        // Check attributes in el2 that are not in el1
        Array.from(el2Attributes).forEach((attr) => {
            if (!el1.hasAttribute(attr.name) && !shouldIgnore(attr.name)) {
                diff[attr.name] = { el1Value: null, el2Value: attr.value };
                onFalse(attr.name, null, attr.value); // Call onFalse for attributes only in el2
            }
        });
    } catch (error: any) {
        console.error(`Error comparing attributes: ${error.message}`);
    }

    return diff;
}

export function removeAttributesByPrefix(
    element: HTMLElement,
    prefixes: string | string[],
    options: RemoveAttributesByPrefixOptions,
): void {
    const { onRemove, protectedAttr } = options;

    try {
        if (!(element instanceof HTMLElement)) {
            throw new TypeError('Provided element is not a valid HTMLElement.');
        }

        const prefixList = Array.isArray(prefixes) ? prefixes : [prefixes];
        if (
            prefixList.length === 0 ||
            prefixList.some(
                (prefix) => typeof prefix !== 'string' || !prefix.trim(),
            )
        ) {
            throw new Error(
                'Invalid prefixes provided. Prefixes must be non-empty strings.',
            );
        }

        Array.from(element.attributes).forEach((attr) => {
            const attrName = attr.name;
            const shouldRemove = prefixList.some((prefix) =>
                attrName.startsWith(prefix),
            );

            if (shouldRemove) {
                if (typeof onRemove === 'function') {
                    onRemove(attrName);
                }

                const isRemovable = (attrName: string): boolean | undefined => {
                    if (protectedAttr) {
                        return !protectedAttr.includes(attrName);
                    }
                };

                // Safeguard against protected attributes or system-specific attributes (optional)
                if (isRemovable(attrName) === true) {
                    element.removeAttribute(attrName);
                }
            }
        });
    } catch (error: any) {
        console.error(
            `Error while removing attributes by prefix: ${error.message}`,
        );
    }
}
