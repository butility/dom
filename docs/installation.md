# Installation

To use the Form package in your project, follow these steps:

## Using npm

1. Open your terminal.
2. Navigate to your project directory.
3. Run the following command:

```bash
npm install @butility/dom
# or
pnpm add @butility/dom
# or
yarn add @butility/dom
```

## Using CDN

You can also include the form package via a CDN link in your HTML file:

```html
<!-- To use all the functions and methods -->
<script src="https://unpkg.com/@butility/dom@latest/dom.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/dom@latest/dom.js"></script>
<!-- To use HTML utils -->
<script src="https://unpkg.com/@butility/dom@latest/html.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/dom@latest/html.js"></script>
<!-- To use Element utils -->
<script src="https://unpkg.com/@butility/dom@latest/element.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/dom@latest/element.js"></script>
<!-- To use Event utils -->
<script src="https://unpkg.com/@butility/dom@latest/event.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/dom@latest/event.js"></script>
<!-- To use Class utils -->
<script src="https://unpkg.com/@butility/dom@latest/class.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/dom@latest/class.js"></script>
<!-- To use Attribute utils -->
<script src="https://unpkg.com/@butility/dom@latest/attribute.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/dom@latest/attribute.js"></script>
```

```js

import { EventUtils } from "https://unpkg.com/@butility/dom@latest/dom.js";
import { video } from "https://cdn.jsdelivr.net/npm/@butility/dom@latest/html.js";
// ....
```

## Importing the Package

After installation, import the necessary modules in your JavaScript files:

```javascript
import { a, p } from '@butility/dom/html';
```