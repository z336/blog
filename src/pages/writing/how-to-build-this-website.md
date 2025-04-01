---
layout: ../../layouts/PostLayout.astro
title: "How to build this website"
pubDate: 2025-03-30
category: "How-to"
tags: ["HTML", "CSS", "Accessibility"]
description: "Set goals, choose tools, design, and build the site."
lede: "<em>This is an opinionated, conversational, how-to guide for building this website. You're more than welcome to disagree with any of this — my ideas were influenced by experiences that may not overlap with yours!</em>"
---

I love building websites. I spent some time working as a front end developer before settling in to technical writing. My experience working on the front end still shapes my opinions and understanding for everything that I do. I approach documentation from an almost visual point of view. A help article (web page) is a bunch of boxes and landmarks with a lot of words and details placed in between. If a help article is poorly presented and not accessible for everyone, it doesn't matter what you write — the audience's understanding will suffer.

With all that said, let's take a look at how I built this website:

## Set goals for the project

Before I did anything, I wrote down my goals:

- The site should be as accessible for everyone as I can possibly make it.
- The site should be stylish — sometimes I begin with aesthetics and work my way backwards toward functionality.
- I want a space that I can maintain for a long time — I love looking at blogs that were obviously created many years ago and have been lovingly updated over the years.

## Choose the (right?) tools

I choose my tools for a variety of reasons, and sometimes those reasons do not include "because it's the best." I make choices based on data privacy concerns, or I happen to like the tool, or I'm already confident using tool. Let's take a look:

1. [Sublime Text](https://www.sublimetext.com/): I started using Sublime Text years ago because it was recommended. Then I switched to Visual Studio Code because it is "the best." Now I'm back to Sublime Text. VS Code is robust but bloated, and I'm just so tired of Microsoft tracking everything I do. It might take some hacking and the ecosystem is not as robust, but Sublime Text is still one svelte editor.
2. [Hyper](https://hyper.is/): You should enjoy the square you stare at for many hours a day.
3. [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/): I'm kind of a Firefox lifer, even though they seem to be selling out at the time of writing. The developer tools are top notch and they let me continue to use [uBlock Origin](https://ublockorigin.com/).
4. [Astro](https://www.astro.build/): It feels familiar if you have ever built anything with React, but unlike React, it does not ship any JavaScript to the client unless you intentionally add it. This is great for speed and accessibility!

## Design in HTML and CSS

I like to think I have an eye for design but I am not a designer. So step 0 for me is to shop around for inspiration and see if I can use it to create something new. These sites look great and maybe obviously inspired what I've got here:

- [HeydonWorks](https://heydonworks.com/)
- [Henry from Online](https://henry.codes/)
- [MAXIMUM ROCKNROLL](https://www.maximumrocknroll.com/)

With some ideas in mind, I designed this site with a text editor and a browser. I design most of my projects like this because it is where I feel the most confident. Designing this way has the following side-effects:

1. I can write semantic HTML without any distractions — let's worry about what a framework wants later.
2. I can write pretty much all of my CSS, though surprises and changes are inevitable.
3. I don't have to translate designs to code.

This method is not foolproof! Without fail, I always have more to work out when I move to the framework than I probably would using traditional design methods. Also, if I were building websites _for a living_, I would simply invest in more design skills. But this works for my small projects.

## Create the project

With goals and designs in hand, I created the project in Astro. Check out this [tutorial](https://docs.astro.build/en/tutorial/0-introduction/) for exact steps, but here are my steps:

1. Run the setup wizard
2. Create pages, layouts, and components
3. Add styles

Let's break these down:

### Run the setup wizard

I used Astro's <code>create astro</code> setup wizard in my terminal to get started:

```bash
npm create astro@latest -- --template minimal
```

Astro also supports <code>pnpm</code> and <code>Yarn</code>, so knock yourself out if you'd rather work with one of those tools.

### Create pages, layouts, and components

I created the directories and files for the content. Here is a simplified version of the directories:

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

Note that there are many other files and folders up and down the tree, but generally these are what I worked with. Some of these are absolutely required and some are used out of convention. See [Project structure](https://docs.astro.build/en/basics/project-structure/) for a more detailed explanation. Here's what I use these for:

- <code>public/</code>: Unprocessed files and assets, such as <code>favicon.svg</code> and font files.
- <code>src/components/</code>: Reusable pieces of code I want to use in many places. This is a familiar concept if you have worked with React.
- <code>src/layouts/</code>: Reusable layouts. I have two — a layout for all of my pages and a layout that extends the base layout for blog posts.
- <code>/src/pages/</code>: All of my pages and blog posts are here. I keep links and notes in JSON files next to their respective pages.
- <code>/src/styles/</code>: CSS lives here. I go into detail about how I style my sites below.
- <code>/src/utils/</code>: Reusable utility functions go here. For example, I have a function to format dates and a function that generates slugs from strings.

### Add styles

Now that I had directories and some basic pages created in the project, it was time to style the site. Where I begin the style work can vary in practice sometimes, because I find it difficult to add functionality or copy without _some_ idea for how the site will look — so this isn't always a straight line to the finish.

I may write a dedicated CSS post in the future because it's where I feel I have the most to say. For now, here is the file tree:

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
- <code>global.css</code>: Styles applied primarily to _element selectors_ such as <code>&lt;p&gt;</code> — I want these styles to apply a the top level and be used everywhere. You know, like a <em>cascade</em>.
- <code>reset.css</code>: A CSS reset using Andy Bell's [A (more) Modern CSS Reset](https://piccalil.li/blog/a-more-modern-css-reset/).
- <code>settings.css</code>: CSS variables applied to <code>:root</code>. Think
- <code>styles.css</code>: And finally, this is where I import all of the other CSS files. This is the file I add to the <code>&lt;head&gt;</code>.

I imported all of these files into <code>styles.css</code> in a specific order:

```css
@import url("reset.css");
@import url("settings.css");
@import url("global.css");
@import url("cube.css");
```

I want to use the best CSS feature: the cascade. So this import order applies the reset, adds the settings (variables) the other files will use, applies universal element selector styles, and then adds all of the specific CUBE styles. This way, the styles are applied in the preferred order to the document.

Note that you can apply CSS in an Astro project in many ways, including using SASS, CSS-in-JS solutions (gross), etc. I love SASS but vanilla CSS is so good these days I wanted to give it a try.

## Deploy

A website is never complete, but at some point I decided to deploy the site out of GitHub using Netlify. Since this is a digital garden, I may update this post, change the styles, move content around, etc. But for now, this is about as done as it gets.
