### Traverse Module

The **Traverse Module** offers a set of functions designed for navigating and manipulating the DOM tree efficiently. This module simplifies tasks such as finding elements, retrieving parents and siblings, and selecting elements based on various criteria. With its intuitive API, developers can easily traverse the DOM structure and manage elements effectively.

#### Types

- **SelectionOptions<T>**: Options for selecting elements based on various criteria.
  - `attribute` (keyof T, optional): Attribute name to match.
  - `value` (string, optional): Value of the attribute to match.
  - `className` (string, optional): Class name to match.
  - `tagName` (keyof HTMLElementTagNameMap, optional): Tag name of the elements to select.
  - `customAttributes` (object, optional): Key-value pairs for custom attributes to match.
  - `dataAttributes` (object, optional): Key-value pairs for data attributes to match.
  - `innerText` (string, optional): Inner text content to match.
  - `innerHTML` (string, optional): Inner HTML content to match.
  - `hasChild` (function, optional): Callback to check if an element has a specific child.
  - `filterCallback` (function, optional): Custom callback to filter elements.
  - `multiple` (boolean, optional): If true, returns multiple elements.
  - `orderBy` ('asc' | 'desc', optional): Order results in ascending or descending order.
  - `limit` (number, optional): Limits the number of results returned.

- **ParentOptions**: Options for retrieving parent elements.
  - `includeDocument` (boolean, optional): If true, includes the document node in the search.

- **ChildrenOptions**: Options for retrieving child elements.
  - `filter` (function, optional): Callback to filter child elements.

- **SiblingOptions**: Options for retrieving sibling elements.
  - `skipHidden` (boolean, optional): If true, skips hidden siblings.

- **ClosestOptions**: Options for finding the closest ancestor.
  - `stopAt` (HTMLElement, optional): The element at which to stop the search.

- **FindAllOptions**: Options for finding multiple elements.
  - `unique` (boolean, optional): If true, returns only unique elements.
  - `limit` (number, optional): Limits the number of elements returned.

---

#### Namespace: `Traverse`

The `Traverse` namespace contains the following exported functions for DOM traversal and manipulation:

---

### **Functions:**

#### **1. findAll<T extends HTMLElement>(element: T, selector: string, options?: FindAllOptions): T[]**
- **Description**: Finds all elements that match a specified selector within a given element.
- **Parameters**:
  - `element` (T, required): The element to search within.
  - `selector` (string, required): The CSS selector to match.
  - `options` (FindAllOptions, optional): Options for finding elements.
- **Returns**: An array of matching elements.

#### **2. getChildren<T extends HTMLElement>(element: T, options?: ChildrenOptions): T[]**
- **Description**: Retrieves all child elements of a specified element, with optional filtering.
- **Parameters**:
  - `element` (T, required): The target element to retrieve children from.
  - `options` (ChildrenOptions, optional): Options for filtering children.
- **Returns**: An array of child elements.

#### **3. getClosest<T extends HTMLElement>(element: T, selector: string, options?: ClosestOptions): T | null**
- **Description**: Finds the closest ancestor of a specified element that matches a given selector.
- **Parameters**:
  - `element` (T, required): The target element to start searching from.
  - `selector` (string, required): The CSS selector to match.
  - `options` (ClosestOptions, optional): Options for finding the closest element.
- **Returns**: The closest matching ancestor element or null if not found.

#### **4. getNextSibling<T extends HTMLElement>(element: T, options?: SiblingOptions): T | null**
- **Description**: Retrieves the next sibling element of a specified element.
- **Parameters**:
  - `element` (T, required): The target element.
  - `options` (SiblingOptions, optional): Options for retrieving siblings.
- **Returns**: The next sibling element or null if not found.

#### **5. getParent<T extends HTMLElement>(element: T, options?: ParentOptions): ParentNode | null**
- **Description**: Retrieves the parent element of a specified element.
- **Parameters**:
  - `element` (T, required): The target element.
  - `options` (ParentOptions, optional): Options for retrieving the parent.
- **Returns**: The parent element or null if not found.

#### **6. getPreviousSibling<T extends HTMLElement>(element: T, options?: SiblingOptions): T | null**
- **Description**: Retrieves the previous sibling element of a specified element.
- **Parameters**:
  - `element` (T, required): The target element.
  - `options` (SiblingOptions, optional): Options for retrieving siblings.
- **Returns**: The previous sibling element or null if not found.

#### **7. selectElem<T extends HTMLElement>(selector: string, options?: SelectionOptions<T>): T[] | T | null**
- **Description**: Selects elements based on a specified selector and optional criteria.
- **Parameters**:
  - `selector` (string, required): The CSS selector to match.
  - `options` (SelectionOptions<T>, optional): Options for selecting elements.
- **Returns**: An array of matching elements, a single element, or null if no match is found.

---

#### Default Export:
- The `Traverse` namespace is exported by default, providing a streamlined interface for efficient DOM traversal and manipulation in web applications.