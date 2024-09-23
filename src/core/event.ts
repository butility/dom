import { eventStore, dataStore } from '@/utils/event';
import type { EventHandler } from '@/types/dom';

export function on<T extends HTMLElement>(
    element: T,
    event: string,
    handler: EventHandler,
): void {
    if (!eventStore.has(element)) {
        eventStore.set(element, new Map());
    }

    const eventMap = eventStore.get(element)!;
    if (!eventMap.has(event)) {
        eventMap.set(event, []);
    }

    eventMap.get(event)!.push(handler);
    element.addEventListener(event, handler);
}

export function off<T extends HTMLElement>(
    element: T,
    event: string,
    handler: EventHandler,
): void {
    const eventMap = eventStore.get(element);
    if (eventMap && eventMap.has(event)) {
        const handlers = eventMap.get(event)!;
        const index = handlers.indexOf(handler);
        if (index > -1) {
            handlers.splice(index, 1);
            element.removeEventListener(event, handler);
        }
    }
}

export function trigger<T extends HTMLElement>(
    element: T,
    event: string,
): void {
    const customEvent = new Event(event, { bubbles: true, cancelable: true });
    element.dispatchEvent(customEvent);
}

export function once<T extends HTMLElement>(
    element: T,
    event: string,
    handler: EventHandler,
): void {
    const onceHandler: EventHandler = (e) => {
        handler(e);
        off(element, event, onceHandler);
    };
    on(element, event, onceHandler);
}

export function delegate<T extends HTMLElement>(
    parent: T,
    childSelector: string,
    event: string,
    handler: EventHandler,
): void {
    const delegateHandler: EventHandler = (e) => {
        const target = e.target as HTMLElement;
        if (target && target.matches(childSelector)) {
            handler(e);
        }
    };
    on(parent, event, delegateHandler);
}

export function setEventData(event: Event, data: any): void {
    dataStore.set(event, data);
}

export function getEventData(event: Event): any {
    return dataStore.get(event);
}

export function triggerEvent<T extends HTMLElement>(
    element: T,
    eventType: string,
    options?: CustomEventInit,
): void {
    const customEvent = new CustomEvent(eventType, {
        bubbles: true,
        cancelable: true,
        ...options,
    });
    element.dispatchEvent(customEvent);
}
