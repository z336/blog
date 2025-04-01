---
layout: ../../layouts/PostLayout.astro
title: "How to build this website"
pubDate: 2025-03-30
category: "How-to"
tags: ["HTML", "CSS", "Accessibility"]
description: "Set goals, choose tools, design, and build the site."
lede: "<em>This is an opinionated, conversational, how-to guide for building this website. You're more than welcome to disagree with any of this — my ideas were influenced by experiences that may not overlap with yours!</em>"
---

I love building websites. I spent some time working as a front end developer before settling in to technical writing as my career. My experience working on the front end still shapes my opinions and understanding for everything else that I do. I approach documentation from an almost visual point of view — a help article (web page) is a bunch of boxes, landmarks, images, and colors with a lot of words and details placed in between. If a help article is poorly presented and not accessible for everyone, the audience's understanding will suffer.

With all that said, let's talk about my goals, tools, and design choices that went into building this website:

## Set the goals for the site

I had some straight forward goals for building this site:

- The site should be as accessible for everyone as I can possibly make it.
- The site should be stylish — sometimes I begin with aesthetics and work my way backwards toward functionality (shrug).
- I want to tend a digital garden that I can maintain for a long time — I love looking at blogs that were obviously created in like 1999 and have been lovingly updated through the years.

## Choose the tools

I choose my tools based on a variety of reasons, and sometimes those reasons do not include "because it's the best." I use some tools because they are more data privacy focused, or I happen to like them, or I'm just used to them. All that said, here are my tools:

1. [Sublime Text](https://www.sublimetext.com/): I started out using Sublime Text because it was the best text editor of its day (I missed out on being a Notepad ++ maniac). After many years of favoring Visual Studio Code, I'm trying to quit. VS Code is robust but bloated, and I'm just so tired of Microsoft. It might take some hacking around and the ecosystem is not as robust, but Sublime Text is still one svelte editor.
2. [Obsidian](https://obsidian.md/): I use Obsidian for lots of things, but it's nice for authoring Markdown content for a site. If I work entirely in a traditional text editor, I may wander off and start refactoring code instead of creating copy.
3. [Hyper](https://hyper.is/): It looks good and works great for me. You should enjoy the square you stare at for many hours a day.
4. [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/): I'm kind of a Firefox lifer, even though they seem to be selling out at the time of writing. I'm not even sure what the Developer Edition offers beyond the standard edition at this point, but the developer tools are top notch. And they let me continue to use [uBlock Origin](https://ublockorigin.com/).
5. [Astro](https://www.astro.build/): A flexible JavaScript framework for building websites. It feels familiar if you have ever built anything with React, but unlike React, it does not ship any JavaScript to the client unless you intentionally add it. This is great for speed and accessibility!

At the time of writing, I work on a Mac. With each passing day I dream of going full Linux in an effort to decouple myself from large corporations and further alienate myself from everyone else (kidding on that last one, _kinda_).

## Design

I like to think I have an eye for design but I am not a designer. So step 0 for me is to shop around for inspiration. It's probably step 0 for a lot of folks, but it's very important for me. I can humbly submit that these sites are excellent and they heavily inspired what I wanted to do here:

- [HeydonWorks](https://heydonworks.com/)
- [Henry from Online](https://henry.codes/)
- [MAXIMUM ROCKNROLL](https://www.maximumrocknroll.com/)

I typically design my projects with a text editor and a browser because this is where I feel the most confident. Designing this way has the following side-effects:

1. I can write semantic HTML without any distractions — I'm not worried about how a framework handles something or how I'm going to break things out into reusable components — I'm worried about making sure I'm designing to put independent, self-contained content in an <code>&lt;article&gt;</code>.
2. I can write most of my base styles, do some basic layout work, and generally knock out the CSS for how I want the site to look.
3. I don't have to translate designs to code. I know that this process is better and better, eh.

This method is not foolproof! Without fail, I always have much more to work out when I move to the actual project than I probably would with full prototypes. Also, if I were building websites _for a living_, I would absolutely invest in more design skills. But this works for my small projects.

## Create the project

At this point, I'm ready to create the project. Astro has a [great tutorial](https://docs.astro.build/en/tutorial/0-introduction/) you can follow for exact steps, but here is the path I took:

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

I created the directories and files for the content I intended to have on the site. Here is a simplified version of the directories:

```plaintext
/
├── public/
└── src/
    ├── assets/
    ├── components/
    ├── layouts/
    └── pages/
        ├── links/
        ├── notes/
        └── writing/
    ├── styles/
    └── utils/
```

Note that there are many other files and folders up and down the tree, but generally these are what I worked with. Some of these are absolutely required and some are used out of convention. See [Project structure](https://docs.astro.build/en/basics/project-structure/) for Astro's more detailed explanation of these folders from their perspective. Here's what I use these for:

- <code>public/</code>: Unprocessed files and assets, such as <code>favicon.svg</code>.
- <code>src/assets/</code>: _Processed_ files and assets, such as the font files.
- <code>src/components/</code>: Reusable pieces of code, such as a <code>&lt;Header /&gt;</code>, I want to use in many places. This is a familiar concept if you have worked with React.
- <code>src/layouts/</code>: Reusable layouts. I have two — a layout for all of my pages and a layout that extends the base layout for blog posts.
- <code>/src/pages/</code>: All of my pages and blog posts are here. I keep links and notes in JSON files next to page and update those to add more content.
- <code>/src/styles/</code>: CSS all lives here. I go into detail about how I style my sites below.
- <code>/src/utils/</code>: Any reusable functions I might need throughout the site go here. For example, I have a function to format dates and a function that generates slugs from strings.

### Add styles

Now that I have directories and some basic pages created in the project, it's time to style the site. Where I begin the style work can vary in practice sometimes, because I find it difficult to add functionality or copy without _some_ idea for how the site will look — so this isn't always a straight line to the finish.

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

- <code>cube.css</code>: The specific, custom CSS classes written using the [CUBE CSS methodology](https://cube.fyi/).
- <code>global.css</code>: Styles applied primarily to _element selectors_ such as <code>&lt;p&gt;</code> — I want these styles to apply a the top level and be used everywhere.
- <code>reset.css</code>: A CSS reset using Andy Bell's [A (more) Modern CSS Reset](https://piccalil.li/blog/a-more-modern-css-reset/).
- <code>settings.css</code>: This is where I create CSS variables and apply them to <code>:root</code>.
- <code>styles.css</code>: And finally, this is where I import all of the other CSS files. This is the file I add to the <code>&lt;head&gt;</code>.

I import all of these files in <code>styles.css</code> in a specific order:

```css
@import url("reset.css");
@import url("settings.css");
@import url("global.css");
@import url("cube.css");
```

I want to work with CSS and utilize its best skill: the cascade. So what I'm saying with the import is to apply the reset, add the settings (variables) the other files will use, apply element selector styles, and then finally all of the specific CUBE styles. This way, if there is a slow connection, the styles are applied in the preferred order.

Note that you can apply CSS in an Astro project in seemingly limitless ways, including using SASS. I still love SASS but I never used any of the more complicated features, so vanilla CSS is often good enough for me these days.

## Deploy

A website is maybe never complete for me, but at some point I decided to deploy the site out of GitHub using Netlify. Since this is a digital garden, I may update this post, change the styles, move content around, etc. But for now, this is about as done as it gets!
