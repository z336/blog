---
layout: ../../layouts/PostLayout.astro
title: "Accessible spacing with links"
pubDate: 2025-04-11
update:
category: "Article"
tags: ["accessibility", "css", "responsive design"]
description: "Give links room to breathe."
lede: "Link and button spacing on touch screens is an accessibility issue. If we place links too close together some users may find it difficult to tap the right thing. I noticed the links in the footer on this site were very close on my phone, so here are some of the considerations I had and the solution I came up with to fix this."
---

## The lay of the land

This site is built using fluid responsive design principles — the font sizes and spacing are laid out in a "major third" scale and they calculate and adjust to the size of the viewport (or screen, if we want to talk like humans do). I generated the CSS variables to achieve this with the [Type and Space calculator tools at Utopia](https://utopia.fyi/type/calculator?c=320,18,1.25,1240,20,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12).

The footer layout uses [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/) and a design pattern (aptly named _The Grid_) from [Every Layout](https://every-layout.dev/). I can't link to The Grid directly because it is behind a paywall that you should very much consider paying to get by. But I think it's OK to share what I have done here:

```css
.footer-grid {
  display: grid;
  grid-gap: var(--gutter);
}

@supports (width: min(250px, 100%)) {
  .footer-grid {
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  }
}
```

This creates a grid layout that generates columns automatically, based on the content that exists in the HTML. As the screen becomes smaller, grid items drop below each other until all of them are stacked vertically. No media queries or breakpoints are required for this magic, so I don't have to try to predict when and where the breaks should occur.

It's an interesting pattern because typically grids are used for more rigid layouts, while [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) might be used when the layout needs to be more fluid or it is less predictable. I could probably get the same effect on this site using flexbox, but this works well.

## What didn't work

All together, the fluid design pattern and the generative grid are solid. The font is sized appropriately to the screen and the grid takes up the space it is provided without using a media query. Everything is _fluid_ and _generative_ instead of trying to predict every layout scenario.

That's great, but I noticed that the links in the footer navigation were difficult to press on my phone. Since the footer font is sized down a step, the default spacing between links was way too tight. I needed to figure out a way to make the links more accessible on phones and tablets and I wanted to do it without adding more complexity or writing a lot more code.

## First thoughts

The first idea I had to fix this was to increase the spacing between the links in the footer. That's easy enough and all I would have to do is add `margin-block-start` with a reasonable size to all of the `<li>`. When I tried this, it added the desired spacing for smaller screens, but it visually clashed on desktop. It was simple, but it didn't solve all of the problems.

The next idea I had was to style each of the lists with flexbox, but this added complexity if I wanted to do it well. I wanted to keep the default spacing on desktop and add _more_ spacing on mobile — flexbox can't do that without media queries and I didn't want to try to predict when to add spacing.

## The fix

The solution that fixed the layout on small screens, didn't disrupt the layout on larger screens, and wasn't overly complex, was to create a "custom space pair" that sized _up_ as the screen sized _down_. This is easy to do with the Utopia tool, but I did have to make some more calculations to figure out a "4xs" size that followed the "major third" sizing pattern:

```css
--space-0-4xs: clamp(0rem, 1.352rem - 1.808vw, 0.9rem);
```

This variable basically says to start with 0 on larger screens and then _increase_ up to `0.9rem` as the screen _shrinks_.

Here it is applied to the footer styles:

```css
footer {
  /* Other styles */

  /* Add space in reverse so that footer links are easier to click on mobile */
  ul li:not(:first-child) {
    margin-block-start: var(--space-0-4xs);
  }
}
```

On smaller screens this adds margin to the top of each `<li>` that is not the first `<li>`. Skipping the first `<li>` preserves the visual flow between the headings and the lists.

If you are on desktop you can see how this works by resizing your browser. Initially, there is 0 margin applied to each `<li>` in the `<footer>`. As the screen becomes smaller, margin is added to the top of each `<li>`. If you're on a phone or a tablet, the links should be well spaced and clickable.

This solution respects my design patterns as they exist and doesn't add complexity. It doesn't attempt to predict the exact moment when spacing should be applied, but instead it gradually adjusts based on the screen size.
