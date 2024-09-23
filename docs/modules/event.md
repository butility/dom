### EventUtils Module

The **EventUtils Module** provides a comprehensive set of functions for managing events in web applications. This module simplifies event handling by allowing developers to easily add, remove, and trigger event listeners, as well as manage associated event data. With its intuitive API, it enhances the efficiency and effectiveness of event-driven programming.

#### Types

- **EventHandler**: A function type representing an event handler that receives an `Event` object.
  - **Parameters**:
    - `event` (Event): The event object that is passed to the handler.

---

#### Namespace: `EventUtils`

The `EventUtils` namespace contains the following exported functions for event management:

---

### **Functions:**

#### **1. delegate<T extends HTMLElement>(parent: T, childSelector: string, event: string, handler: EventHandler): void**
- **Description**: Attaches an event handler to a parent element that delegates to child elements matching a specified selector.
- **Parameters**:
  - `parent` (T, required): The parent element to attach the event handler to.
  - `childSelector` (string, required): The CSS selector for child elements.
  - `event` (string, required): The event type to listen for (e.g., "click").
  - `handler` (EventHandler, required): The function to execute when the event occurs.

#### **2. getEventData(event: Event): any**
- **Description**: Retrieves custom data associated with an event.
- **Parameters**:
  - `event` (Event, required): The event from which to retrieve data.
- **Returns**: The custom data associated with the event.

#### **3. off<T extends HTMLElement>(element: T, event: string, handler: EventHandler): void**
- **Description**: Removes a previously attached event handler from an element.
- **Parameters**:
  - `element` (T, required): The target element from which to remove the event handler.
  - `event` (string, required): The event type to unbind (e.g., "click").
  - `handler` (EventHandler, required): The function to remove.

#### **4. on<T extends HTMLElement>(element: T, event: string, handler: EventHandler): void**
- **Description**: Attaches an event handler to a specified element.
- **Parameters**:
  - `element` (T, required): The target element to which the event handler is added.
  - `event` (string, required): The event type to listen for (e.g., "click").
  - `handler` (EventHandler, required): The function to execute when the event occurs.

#### **5. once<T extends HTMLElement>(element: T, event: string, handler: EventHandler): void**
- **Description**: Attaches an event handler that will be executed only once for a specified event on an element.
- **Parameters**:
  - `element` (T, required): The target element to which the event handler is added.
  - `event` (string, required): The event type to listen for (e.g., "click").
  - `handler` (EventHandler, required): The function to execute when the event occurs.

#### **6. setEventData(event: Event, data: any): void**
- **Description**: Associates custom data with an event.
- **Parameters**:
  - `event` (Event, required): The event to which the data is attached.
  - `data` (any, required): The custom data to set.

#### **7. trigger<T extends HTMLElement>(element: T, event: string): void**
- **Description**: Programmatically triggers a specified event on an element.
- **Parameters**:
  - `element` (T, required): The target element on which to trigger the event.
  - `event` (string, required): The event type to trigger (e.g., "click").

#### **8. triggerEvent<T extends HTMLElement>(element: T, eventType: string, options?: CustomEventInit): void**
- **Description**: Programmatically triggers a custom event with optional initialization options.
- **Parameters**:
  - `element` (T, required): The target element on which to trigger the event.
  - `eventType` (string, required): The type of event to trigger.
  - `options` (CustomEventInit, optional): Initialization options for the custom event.

---

#### Default Export:
- The `EventUtils` namespace is exported by default, providing a straightforward interface for efficient event management in web applications.