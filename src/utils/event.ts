import type { EventHandler } from '@/types/dom';

// Private stores for events and data
export const eventStore = new Map<HTMLElement, Map<string, EventHandler[]>>();
export const dataStore = new Map<Event, any>();
