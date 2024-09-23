### Attribute Module

The **Attribute Module** provides a comprehensive suite of functions for managing HTML attributes within web applications. This module enables developers to manipulate attributes effectively, facilitating tasks such as retrieval, modification, and comparison of element attributes. With its versatile options, it streamlines DOM manipulation and enhances application functionality.

#### Types

- **CompareAttributesOptions**: Options for comparing attributes between two elements.
  - `onTrue` (function, optional): Callback for attributes that match.
  - `onFalse` (function, optional): Callback for attributes that do not match.
  - `ignoreAttributes` (string[], optional): List of attributes to ignore during comparison.
  - `customCompare` (function, optional): Custom comparison logic for attribute values.

- **RemoveAttributesByPrefixOptions**: Options for removing attributes with a specified prefix.
  - `onRemove` (function, optional): Callback for each removed attribute.
  - `protectedAttr` (string[], optional): List of attributes that should not be removed.

- **SetAttributesOptions**: Options for setting attributes on an element.
  - `whitelist` (string[], optional): Allowed attributes for setting.
  - `blacklist` (string[], optional): Disallowed attributes for setting.
  - `validate` (function, optional): Function to validate attribute key-value pairs.
  - `transformValue` (function, optional): Function to transform attribute values before setting.
  - `addPrefix` (string, optional): Prefix to add to attribute names.
  - `onAttributeSet` (function, optional): Callback for when attributes are successfully set.
  - `onError` (function, optional): Callback for handling errors during setting.
  - `log` (boolean, optional): Enable logging of attribute operations.

- **GetAttributeOptions**: Options for retrieving an attribute from an element.
  - `dataPrefix` (boolean, optional): Indicates if the data prefix should be considered.
  - `defaultValue` (string, optional): Default value to return if the attribute is not found.
  - `transform` (function, optional): Function to transform the retrieved value.

---

#### Namespace: `Attribute`

The `Attribute` namespace contains the following exported functions for efficient attribute management:

---

### **Functions:**

#### **1. attributesToQueryString(element: HTMLElement): string**
- **Description**: Converts all attributes of an element into a query string format.
- **Parameters**:
  - `element` (HTMLElement, required): The element whose attributes will be converted.

#### **2. compareAttributes(el1: HTMLElement, el2: HTMLElement, options?: CompareAttributesOptions): CompareAttributesResult**
- **Description**: Compares attributes of two elements and executes specified callbacks based on matches.
- **Parameters**:
  - `el1` (HTMLElement, required): First element for comparison.
  - `el2` (HTMLElement, required): Second element for comparison.
  - `options` (CompareAttributesOptions, optional): Configuration for the comparison.

#### **3. copyAttributes(element: HTMLElement, target: HTMLElement): void**
- **Description**: Copies attributes from one element to another.
- **Parameters**:
  - `element` (HTMLElement, required): Source element.
  - `target` (HTMLElement, required): Target element for attributes.

#### **4. findElementByAttribute(element: HTMLElement, attributeName: string): HTMLElement[]**
- **Description**: Finds all descendant elements of a specified element that have a given attribute.
- **Parameters**:
  - `element` (HTMLElement, required): Parent element to search within.
  - `attributeName` (string, required): Attribute name to search for.

#### **5. getAllAttributes(element: HTMLElement): Record<string, string>**
- **Description**: Retrieves all attributes of an element as a key-value object.
- **Parameters**:
  - `element` (HTMLElement, required): The element to retrieve attributes from.

#### **6. getAttribute(element: HTMLElement, attributeName: string, options: GetAttributeOptions): Record<string, string | null>**
- **Description**: Retrieves a specific attribute from an element, with optional transformation.
- **Parameters**:
  - `element` (HTMLElement, required): The element to query.
  - `attributeName` (string, required): Name of the attribute to retrieve.
  - `options` (GetAttributeOptions, required): Configuration options for retrieval.

#### **7. getAttributesByPrefix(element: HTMLElement, prefix: string): Record<string, string>**
- **Description**: Retrieves all attributes from an element that start with a specified prefix.
- **Parameters**:
  - `element` (HTMLElement, required): The element to query.
  - `prefix` (string, required): Prefix to filter attributes.

#### **8. hasAnyAttributes(element: HTMLElement): boolean**
- **Description**: Checks if an element has any attributes.
- **Parameters**:
  - `element` (HTMLElement, required): The element to check.

#### **9. hasAttribute(element: HTMLElement, attributeName: string): boolean**
- **Description**: Checks if an element has a specific attribute.
- **Parameters**:
  - `element` (HTMLElement, required): The element to check.
  - `attributeName` (string, required): Name of the attribute to check for.

#### **10. removeAllAttributes(element: HTMLElement): void**
- **Description**: Removes all attributes from an element.
- **Parameters**:
  - `element` (HTMLElement, required): The element from which to remove attributes.

#### **11. removeAttribute(element: HTMLElement, attributeName: string): void**
- **Description**: Removes a specific attribute from an element.
- **Parameters**:
  - `element` (HTMLElement, required): The element to modify.
  - `attributeName` (string, required): Name of the attribute to remove.

#### **12. removeAttributesByName(element: HTMLElement, ...attributeNames: string[]): void**
- **Description**: Removes multiple attributes from an element by name.
- **Parameters**:
  - `element` (HTMLElement, required): The element to modify.
  - `attributeNames` (string[], required): Names of the attributes to remove.

#### **13. removeAttributesByPrefix(element: HTMLElement, prefixes: string | string[], options: RemoveAttributesByPrefixOptions): void**
- **Description**: Removes all attributes with specified prefixes from an element.
- **Parameters**:
  - `element` (HTMLElement, required): The element to modify.
  - `prefixes` (string | string[], required): Prefixes of attributes to remove.
  - `options` (RemoveAttributesByPrefixOptions, required): Configuration options for removal.

#### **14. setAttribute(element: HTMLElement, attribute: object, options?: SetAttributesOptions): void**
- **Description**: Sets one or more attributes on an element with validation and transformation options.
- **Parameters**:
  - `element` (HTMLElement, required): The element to modify.
  - `attribute` (object, required): Key-value pairs of attributes to set.
  - `options` (SetAttributesOptions, optional): Configuration options for setting attributes.

#### **15. setAttributesFromQueryString(element: HTMLElement, queryString: string, options?: SetAttributesOptions): void**
- **Description**: Sets attributes on an element based on a query string.
- **Parameters**:
  - `element` (HTMLElement, required): The element to modify.
  - `queryString` (string, required): The query string containing attributes.
  - `options` (SetAttributesOptions, optional): Configuration options for setting attributes.

#### **16. toggleAttribute(element: HTMLElement, attributeName: string, attributeValue: string | boolean): void**
- **Description**: Toggles the presence of a specific attribute on an element.
- **Parameters**:
  - `element` (HTMLElement, required): The element to modify.
  - `attributeName` (string, required): Name of the attribute to toggle.
  - `attributeValue` (string | boolean, required): Value to set or remove.

#### **17. toggleAttributes(element: HTMLElement, attributes: Record<string, boolean>): void**
- **Description**: Toggles multiple attributes on an element based on a boolean map.
- **Parameters**:
  - `element` (HTMLElement, required): The element to modify.
  - `attributes` (Record<string, boolean>, required): Map of attribute names and their desired states.

---

#### Default Export:
- The `Attribute` namespace is exported by default, offering a straightforward interface for managing HTML attributes efficiently.