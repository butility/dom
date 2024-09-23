import type { CreateElementOptions } from '@/types/dom';

export function create(
    name: string,
    options: CreateElementOptions = {},
    callback?: Function,
): HTMLElement {
    const element = document.createElement(name);

    if (options.class && Array.isArray(options.class)) {
        options.class.forEach((className) => {
            if (className) {
                element.classList.add(className);
            }
        });
    }

    if (options.attr) {
        for (const key in options.attr) {
            if (Object.hasOwnProperty.call(options.attr, key)) {
                element.setAttribute(key, options.attr[key]);
            }
        }
    }

    if (options.innerText) element.innerText = options.innerText;
    if (options.innerHTML) element.innerHTML = options.innerHTML;

    if (options.children && Array.isArray(options.children)) {
        options.children.forEach((child) => {
            if (child instanceof HTMLElement) {
                element.appendChild(child);
            }
        });
    }

    if (options.draggable) element.draggable = true;
    if (options.style) element.style.cssText = options.style;

    // Observe mutations if specified
    if (options.trackMutation) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                console.log('Mutation observed:', mutation);
            });
        });
        observer.observe(element, {
            attributes: true,
            childList: true,
            subtree: true,
        });
    }

    if (callback && typeof callback === 'function') callback(element);

    return element;
}

export function setHTML(
    element: HTMLElement,
    htmlContent: string,
    evaluateScripts: boolean = false,
) {
    element.innerHTML = htmlContent;

    if (evaluateScripts) {
        const scripts = element.querySelectorAll('script');
        scripts.forEach((script) => {
            const newScript = document.createElement('script');
            if (script.src) {
                newScript.src = script.src;
            } else {
                newScript.textContent = script.textContent;
            }
            script.replaceWith(newScript);
        });
    }
}

export function getHTML(element: HTMLElement): string {
    const tempDiv = create('div', { innerHTML: element.innerHTML });
    tempDiv
        .querySelectorAll('script, iframe, link')
        .forEach((node) => node.remove());
    return tempDiv.innerHTML;
}

export function setText(
    element: HTMLElement,
    textContent: string,
    options: { toUpperCase?: boolean; toLowerCase?: boolean } = {},
) {
    if (options.toUpperCase) {
        textContent = textContent.toUpperCase();
    }
    if (options.toLowerCase) {
        textContent = textContent.toLowerCase();
    }
    element.textContent = textContent;
}
