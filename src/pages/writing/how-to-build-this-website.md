---
layout: ../../layouts/PostLayout.astro
title: "How to build this website"
pubDate: 2025-04-01
category: "How-to"
tags: ["HTML", "CSS", "Accessibility"]
description: "Set goals, choose tools, design, and build the site."
lede: "This is an opinionated, conversational, how-to guide for building this website. You're more than welcome to disagree with any of this — my ideas are influenced by my own experiences and they may not overlap with yours!"
---

I love building websites. I spent some time working as a front-end developer before settling in to technical writing. My experience working on the front end still shapes my opinions and understanding of everything that I do.

I approach documentation from an almost visual point of view. A help article (web page) is a bunch of boxes and landmarks with a lot of words and details placed in between. If a help article is poorly presented and not accessible for everyone, it doesn't matter what you write — your audience's understanding will suffer.

With all that said, let's take a look at how to build this website.

## Set goals for the project

Before I do anything I write down my goals:

- The site should be as accessible for everyone as I can possibly make it.
- The site should be stylish and functional on any screen.
- I want a space that I can cultivate for a long time.

## Choose the (right?) tools

I choose my tools for a variety of reasons, and sometimes those reasons do not include "because it's the best." I may choose a tool because it respects my privacy, or I'm already confident using it, or I just like it for some reason.

Here are the tools I use often:

1. [Sublime Text](https://www.sublimetext.com/): I'm back on my Sublime Text bullshit after years of Visual Studio Code. VS Code is robust, but bloated, and I'm tired of Microsoft tracking everything I do. It might require some hacking here and there but Sublime Text is still one sharp editor.
2. [Hyper](https://hyper.is/): You should enjoy the terminal you stare at for many hours a day.
3. [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/): I'm kind of a Firefox lifer, even though they seem to be selling out at the time of writing. The developer tools are top notch and they still let me use [uBlock Origin](https://ublockorigin.com/).
4. [Astro](https://www.astro.build/): It feels familiar if you have ever built anything with React, but unlike React, it does not ship any JavaScript to the client unless you intentionally add it.

## Design in HTML and CSS

I like to think I have an eye for design but I am not a designer. So step 0 is to shop around for inspiration and see if it can help me to create something new. These sites look great and (perhaps obviously) inspire the design here on my own site:

- [HeydonWorks](https://heydonworks.com/)
- [Henry from Online](https://henry.codes/)
- [MAXIMUM ROCKNROLL](https://www.maximumrocknroll.com/)

I design my sites with a text editor and a browser because it is where I feel the most confident. Designing this way has the following side-effects:

1. I can write semantic HTML without any distractions — let's worry about what a framework wants later.
2. I can write pretty much all of my CSS, though surprises and changes are inevitable.
3. I don't have to translate visual designs to code.

This method is not foolproof! Without fail, I always have more to figure out when I move to the framework than I probably would using traditional design methods. Also, if I were building websites _for a living_, I would simply invest in more design skills. But this works for my small projects.

## Create the project

Check out this [tutorial](https://docs.astro.build/en/tutorial/0-introduction/) to build your own Astro blog. Below are the broad strokes for my own process:

1. [Run the setup wizard](#run-the-setup-wizard)
2. [Create pages, layouts, and components](#create-pages-layouts-and-components)
3. [Add styles](#add-styles)

Let's break these down:

### Run the setup wizard

I use Astro's <code>create astro</code> setup wizard in my terminal:

```bash
npm create astro@latest -- --template minimal
```

Astro also supports <code>pnpm</code> and <code>Yarn</code>, so knock yourself out if you would rather work with one of those tools.

### Create pages, layouts, and components

I create the directories and files for the content. Here is a simplified version of the directories:

```plaintext
/
├── public/
└── src/
    ├── components/
    ├── layouts/
    └── pages/
        ├── links/
        ├── notes/
        └── writing/
    ├── styles/
    └── utils/
```

Note that there are many other files and folders up and down the tree, but generally these are what I work with in a project like this. Some of these are absolutely required (<code>src/pages/</code>, for example) and some are used out of convention. See [Project structure](https://docs.astro.build/en/basics/project-structure/) for a more detailed explanation from Astro.

Here's what I use these directories for:

- <code>public/</code>: Unprocessed files and assets, such as <code>favicon.svg</code> and font files.
- <code>src/components/</code>: Reusable pieces of code I want to use in many places. This is a familiar concept if you have worked with React.
- <code>src/layouts/</code>: Reusable layouts. I have two — a layout for all of my pages and a layout that extends the base layout for blog posts.
- <code>/src/pages/</code>: All of my pages and blog posts are here. I keep links and notes in JSON files next to their respective pages.
- <code>/src/styles/</code>: CSS lives here. I go into detail about how I style my sites below.
- <code>/src/utils/</code>: Reusable utility functions go here. For example, I have a function to format dates and a function that generates slugs from strings.

You can see [this project on GitHub](https://github.com/z336/blog) for finer details.

### Add styles

It is time to style the site. Though, where I truly begin the style work can vary in practice sometimes, because I find it difficult to add functionality or copy without _some_ idea for how the site will look.

Here is the file tree for the CSS:

```plaintext
src/
└── styles/
    ├── cube.css
    ├── global.css
    ├── reset.css
    ├── settings.css
    └── styles.css
```

- <code>cube.css</code>: Specific, custom CSS classes written using the [CUBE CSS methodology](https://cube.fyi/).
- <code>global.css</code>: Styles applied primarily to _element selectors_ such as <code>&lt;p&gt;</code> — I want these styles to apply at the top level and be used everywhere.
- <code>reset.css</code>: A CSS reset using Andy Bell's [A (more) Modern CSS Reset](https://piccalil.li/blog/a-more-modern-css-reset/).
- <code>settings.css</code>: CSS variables applied to <code>:root</code>.
- <code>styles.css</code>: And finally, this is where I import all of the other CSS files. This is the file Astro compiles and adds to the <code>&lt;head&gt;</code>.

I import all of these files into <code>styles.css</code> in a specific order:

```css
@import url("reset.css");
@import url("settings.css");
@import url("global.css");
@import url("cube.css");
```

I want to use the [CSS cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Cascade) to my advantage, so this import order applies the reset, adds the settings (variables), applies universal element selector styles, and then adds all of the specific CUBE styles. The result is the styles are applied in the preferred order to the document when it loads.

Note that you can apply CSS in an Astro project in many ways, including using SASS, CSS-in-JS solutions (gross), etc. I love SASS but vanilla CSS is so good these days.

## Deploy the site

A website is never complete, but at some point I [deploy the site from GitHub using Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).
