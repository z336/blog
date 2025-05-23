---
layout: ../../layouts/PostLayout.astro
title: "Styling focused elements"
pubDate: 2025-04-16
update: 2025-05-13
category: "Note"
tags: ["accessibility", "css"]
lede: 'You can style the way focusable elements look if you want to customize default accessibility styles in browsers. While you should be very cautious not to create any accessibility issues, you can safely modify the visual "focus ring" on focused elements to give it a bit more clarity and panache.'
---

In the past, you could only use the `:focus` pseudo-class to style focused elements. Now it's possible to use `:focus-visible` when you only want to target _visual_ styles and leave other functionality alone.

`:focus-visible` is especially helpful when you only want to style the focus ring on focused elements but you do not want to add unwanted visual focus styles to other events, like mouse clicks, as a side effect.

For a deeper explanation of the differences between `:focous` and `:focus-visible`, check out the [:focus-visible article on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible#focus_vs_focus-visible).

## Here's an example

Here is what I added to this site:

```css
:focus-visible {
  z-index: calc(infinity);
  outline: 3px solid;
  outline-offset: 3px;
}
```

Let's break these down:

1. `z-index: calc(infinity);` sounds made up but it is totally valid CSS that says these styles should be applied at the absolute top of the z-axis. Have a look at [Never lose a z-index battle again](https://www.matuzo.at/blog/2025/never-lose-a-z-index-battle-again) for more information about `calc(infinity)`.
2. `outline: 3px solid;` adds a thick outline to the focus ring and suggests that it should be the current color of the link instead of default blue color.
3. `outline-offset: 3px;` pushes the outline away from the element a bit — this works a lot better than trying to add padding.

All together this creates a nice focus style that is bold and useful but not disruptive to other events.
