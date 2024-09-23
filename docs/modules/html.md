### HTML Module

The **HTML Module** is a collection of functions that mirror the names of standard HTML5 tags. Each function in this module creates an HTML element corresponding to its name and returns that element. For example, calling the `video` function generates a `<video>` element.

Additionally, there are specific functions for the `<head>` and `<body>` elements that append their children directly to the respective tags.

#### Example

```javascript
import { video } from "@butility/dom/html";

// Create a video element with specified attributes and children
const myVideo = video({ controls: true, src: "video.mp4" }, "Your browser does not support the video tag.");

// The `myVideo` variable now holds the created <video> element.
```

In this example:
- The `video` function is called with an object of attributes (like `controls` and `src`) and any children (like fallback text).
- It returns a `<video>` element, which can then be appended to the DOM or manipulated further.

This module streamlines the process of creating HTML elements dynamically, allowing developers to build the DOM with minimal boilerplate code.