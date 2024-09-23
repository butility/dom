### Element Module

The **Element Module** provides a suite of functions for creating and manipulating HTML elements in web applications. This module simplifies tasks such as generating elements, retrieving and setting their HTML content, and managing text content efficiently. With flexible options for element creation, it enhances developers' capabilities for dynamic UI manipulation.

#### Types

- **CreateElementOptions**: Options for creating an HTML element.
  - `class` (string[], optional): Array of class names to assign to the element.
  - `attr` (object, optional): Key-value pairs of attributes to set on the element.
  - `innerText` (string, optional): Text content to set as the inner text.
  - `innerHTML` (string, optional): HTML content to set as the inner HTML.
  - `children` (HTMLElement[], optional): Array of child elements to append.
  - `draggable` (boolean, optional): Sets the element's draggable attribute if true.
  - `style` (string, optional): CSS styles to apply directly to the element.
  - `trackMutation` (boolean, optional): Enables mutation tracking for the element if true.

---

#### Namespace: `Element`

The `Element` namespace contains the following exported functions for element creation and manipulation:

---

### **Functions:**

#### **1. create(name: string, options: CreateElementOptions, callback: Function): HTMLElement**
- **Description**: Creates a new HTML element with specified options and executes a callback function after creation.
- **Parameters**:
  - `name` (string, required): The tag name of the element to create.
  - `options` (CreateElementOptions, required): Configuration options for the new element.
  - `callback` (function, required): Function to execute after the element is created.

#### **2. getHTML(element: HTMLElement): string**
- **Description**: Retrieves the inner HTML of a specified element.
- **Parameters**:
  - `element` (HTMLElement, required): The target element from which to get the HTML.
- **Returns**: The inner HTML content of the element as a string.

#### **3. setHTML(element: HTMLElement, htmlContent: string, evaluateScripts?: boolean): void**
- **Description**: Sets the inner HTML of a specified element, with an option to evaluate any scripts in the content.
- **Parameters**:
  - `element` (HTMLElement, required): The target element to update.
  - `htmlContent` (string, required): The HTML content to set.
  - `evaluateScripts` (boolean, optional): Evaluates scripts in the content if true.

#### **4. setText(element: HTMLElement, textContent: string, options?: { toUpperCase?: boolean; toLowerCase?: boolean }): void**
- **Description**: Sets the text content of a specified element, with options for text casing.
- **Parameters**:
  - `element` (HTMLElement, required): The target element to update.
  - `textContent` (string, required): The text content to set.
  - `options` (object, optional): Configuration for text casing:
    - `toUpperCase` (boolean, optional): Converts text to uppercase if true.
    - `toLowerCase` (boolean, optional): Converts text to lowercase if true.

---

#### Default Export:
- The `Element` namespace is exported by default, providing a straightforward interface for creating and manipulating HTML elements effectively in web applications.