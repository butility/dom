# Usage

Here are some basic examples of how to use the Media package.

## HTML, ClassUtils, Element and Attribute module


```javascript
// Function based html creation
import { body, head, div, button, title, meta, a, ul, li, img, h1, p} from "@butility/dom/html";

head(
    title("my dom package"),
    meta({name: "", content: ""}),
)
// This will append all the children to the body
body(
    div({ class: "content-wrapper" },
        h1("Welcome!"),
        p("This is an example paragraph."),
        button({ class: "btn-primary", onclick: "console.log(\"i am clicked\")" }, "Click Me"),
        a({ href: "https://github.com/butility" }, "Butility"),
        ul(
            li("Item 1"),
            li("Item 2")
        ),
        img({ src: "image.png", alt: "Example image" })
    )
)
```

```javascript

import ClassUtils from "@butility/dom/class";
import Element from "@butility/dom/element";
import Attribute from "@butility/dom/attribute";

ClassUtils.toggleClassOnConnectionStatus(button, "online", "offline");
ClassUtils.toggleClassOnCopy(button, "copied");
ClassUtils.toggleClassOnOrientationChange(button, "orientation"); // output class name `orientation-portrait or landscape
ClassUtils.toggleClassOnDeviceMotion(button, "moved"); // like when device is tilted
ClassUtils.addUniqueClass(button, "unique-class")
ClassUtils.toggleClassOnGeolocationChange(button, "location-changed", {
    enableThrottling: true,
    throttleInterval: 6000, // 6 sec
    onClassToggle: () => {} // Change UI 
});

Element.setHTML(script, "console.log(\"hi\")", true); // setHTML to script
Attribute.setAttribute(button, {
    class: "button-class",
    set: "custom data-set"
}, { addPrefix: true })
```