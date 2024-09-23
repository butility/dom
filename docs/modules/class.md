### ClassUtils Module

The **ClassUtils Module** offers a robust collection of functions for managing CSS classes on HTML elements. This module simplifies the process of adding, removing, toggling, and replacing classes, providing developers with versatile tools for dynamic styling based on user interactions and application states. With its customizable options, it enhances the control over element styles in web applications.

#### Types

- **AddClassesOptions**: Options for adding multiple classes to an element.
  - `timeout` (number, optional): Duration to wait before adding classes.
  - `checkForDuplicates` (boolean, optional): Prevents adding duplicate classes if true.

- **RemoveClassOptions**: Options for removing a class from an element.
  - `logChanges` (boolean, optional): Logs changes to the console if true.
  - `preserveState` (boolean, optional): Retains the class state before removal.

- **ToggleClassOptions**: Options for toggling a class on an element.
  - `onAdd` (function, optional): Callback for when the class is added.
  - `onRemove` (function, optional): Callback for when the class is removed.

- **ToggleGeolocationOptions**: Options for toggling a class based on geolocation changes.
  - `enableThrottling` (boolean, optional): Enables throttling for geolocation events if true.
  - `throttleInterval` (number, optional): Interval for throttling in milliseconds.
  - `onClassToggle` (function, optional): Callback for class toggle events.
  - `onError` (function, optional): Callback for error handling.
  - `geoOptions` (object, optional): Custom options for geolocation requests.

---

#### Namespace: `ClassUtils`

The `ClassUtils` namespace contains the following exported functions for efficient class management:

---

### **Functions:**

#### **1. addClass(element: HTMLElement, className: string, options?: { checkIfExists?: boolean }): void**
- **Description**: Adds a specified class to an element, with an option to check for its existence.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to add.
  - `options` (object, optional): Configuration options for the operation.

#### **2. addClassOnInterval(element: HTMLElement, className: string, interval?: number): void**
- **Description**: Adds a class to an element repeatedly at specified intervals.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to add.
  - `interval` (number, optional): The time interval in milliseconds.

#### **3. addClassOnViewportEnter(element: HTMLElement, className: string): void**
- **Description**: Adds a class to an element when it enters the viewport.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to add.

#### **4. addClasses(element: HTMLElement, classNames: string[], options?: AddClassesOptions): Promise<void>**
- **Description**: Adds multiple classes to an element with options for handling duplicates.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `classNames` (string[], required): Array of class names to add.
  - `options` (AddClassesOptions, optional): Configuration for the addition.

#### **5. addUniqueClass(element: HTMLElement, className: string): void**
- **Description**: Adds a class to an element if it doesn't already exist.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to add.

#### **6. hasAnyClass(element: HTMLElement, classArray: string[]): boolean**
- **Description**: Checks if an element has any of the specified classes.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `classArray` (string[], required): Array of class names to check.

#### **7. removeClass(element: HTMLElement, className: string, options?: RemoveClassOptions): void**
- **Description**: Removes a specified class from an element, with logging options.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to remove.
  - `options` (RemoveClassOptions, optional): Configuration for the removal.

#### **8. removeClassOnInterval(element: HTMLElement, className: string, interval?: number): void**
- **Description**: Removes a class from an element repeatedly at specified intervals.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to remove.
  - `interval` (number, optional): The time interval in milliseconds.

#### **9. replaceClass(element: HTMLElement, oldClass: string, newClass: string, options?: { enableUndo?: boolean }): () => void | null**
- **Description**: Replaces an old class with a new class on an element, with an option to enable undo.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `oldClass` (string, required): The class name to replace.
  - `newClass` (string, required): The new class name.
  - `options` (object, optional): Configuration for the replacement.

#### **10. replaceClassPrefix(element: HTMLElement, oldPrefix: string, newPrefix: string): void**
- **Description**: Replaces all classes with a specified prefix on an element with a new prefix.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `oldPrefix` (string, required): The prefix to replace.
  - `newPrefix` (string, required): The new prefix.

#### **11. replaceClasses(element: HTMLElement, classMap: { [s: string]: string }): void**
- **Description**: Replaces multiple classes on an element according to a provided mapping.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `classMap` (object, required): Mapping of old class names to new class names.

#### **12. toggleClass(element: HTMLElement, className: string, options?: ToggleClassOptions): void**
- **Description**: Toggles the presence of a specified class on an element with optional callbacks.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to toggle.
  - `options` (ToggleClassOptions, optional): Configuration for toggling.

#### **13. toggleClassConditionally(element: HTMLElement, condition: boolean, trueClass: string, falseClass: string): void**
- **Description**: Toggles between two classes based on a condition.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `condition` (boolean, required): The condition to check.
  - `trueClass` (string, required): Class to add if true.
  - `falseClass` (string, required): Class to remove if false.

#### **14. toggleClassOnConnectionStatus(element: HTMLElement, trueClass: string, falseClass: string): void**
- **Description**: Toggles classes based on the network connection status.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `trueClass` (string, required): Class to add if online.
  - `falseClass` (string, required): Class to add if offline.

#### **15. toggleClassOnCopy(element: HTMLElement, className: string): void**
- **Description**: Toggles a class on an element when text is copied.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to toggle.

#### **16. toggleClassOnDeviceMotion(element: HTMLElement, className: string): void**
- **Description**: Toggles a class on an element based on device motion events.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to toggle.

#### **17. toggleClassOnFocus(element: HTMLElement, className: string): void**
- **Description**: Toggles a class on an element when it gains or loses focus.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to toggle.

#### **18. toggleClassOnGeolocationChange(element: HTMLElement, className: string, options?: ToggleGeolocationOptions): () => void**
- **Description**: Toggles a class based on geolocation changes with optional throttling.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to toggle.
  - `options` (ToggleGeolocationOptions, optional): Configuration for geolocation toggling.

#### **19. toggleClassOnIdleTime(element: HTMLElement, className: string, idleTime?: number): void**
- **Description**: Toggles a class on an element after a specified idle time.
- **Parameters**:
  - `

element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to toggle.
  - `idleTime` (number, optional): Time in milliseconds to wait before toggling.

#### **20. toggleClassOnMediaQueryChange(element: HTMLElement, className: string, mediaQuery: any): void**
- **Description**: Toggles a class based on media query changes.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to toggle.
  - `mediaQuery` (any, required): The media query to monitor.

#### **21. toggleClassOnOrientationChange(element: HTMLElement, className: string): void**
- **Description**: Toggles a class on an element when the device orientation changes.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to toggle.

#### **22. toggleClassOnSwipe(element: HTMLElement, className: string): void**
- **Description**: Toggles a class on an element based on swipe events.
- **Parameters**:
  - `element` (HTMLElement, required): The target element.
  - `className` (string, required): The class name to toggle.

---

#### Default Export:
- The `ClassUtils` namespace is exported by default, providing a straightforward interface for efficient class management in web applications.