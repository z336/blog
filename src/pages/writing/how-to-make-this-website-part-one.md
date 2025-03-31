---
layout: ../../layouts/PostLayout.astro
title: "How to build this website, part one"
pubDate: 2025-03-30
category: "How-to"
tags: ["HTML", "CSS", "Accessibility"]
description: "The first post in a series of conversational how-to guides for building this website."
lede: "<em>This is an opinionated, conversational, how-to guide for building this website. I don't claim to be an expert — this is not my primary trade — and you're more than welcome to disagree with any of this. My thoughts and ideas were formed by specific influences and experiences that may not overlap with yours!</em>"
---

I love building websites. I spent some time working as a front end developer before settling in to technical writing as my career. My experience working on the front end still shapes my opinions and understanding for everything else that I do. I approach documentation from an almost visual point of view — a help article (web page) is a bunch of boxes, landmarks, images, and colors with a lot of words and details placed in between. If a help article is poorly presented and not accessible for everyone, the audience's understanding will suffer.

With all that said, let's talk about my goals, tools, and design choices that went into building this website:

## Set some goals

I had some straight forward goals for building this site:

- The site should be as accessible for everyone as I can possibly make it.
- The site should be stylish — sometimes I begin with aesthetics and work my way backwards toward functionality (shrug).
- I want to tend a digital garden that I can maintain for a long time — I love looking at blogs that were obviously created in like 1999 and have been lovingly updated through the years.

## Choose the tools

I choose my tools based on a variety of reasons, and sometimes those reasons do not include "because it's the best." I use some tools because they are more data privacy focused, or I happen to like them, or I'm just used to them. All that said, here are my tools:

1. [Sublime Text](https://www.sublimetext.com/): I started out using Sublime Text because it was the best text editor of its day (I just barely missed being a Notepad ++ maniac). After many years of favoring Visual Studio Code, I'm trying to quit. VS Code is robust but bloated, and I'm just so tired of Microsoft. It might take some hacking around and the ecosystem is not as robust, but Sublime Text is still one svelte editor.
2. [Obsidian](https://obsidian.md/): I use Obsidian for lots of things, but it's nice for authoring Markdown content for a site. If I work entire in a traditional text editor, I may wander off and start refactoring code instead of creating copy.
3. [Hyper](https://hyper.is/): I'm not the terminal user I wish I was and I'm sure Hyper is somehow lacking if you live in this space, but it looks great and works great for me. You should enjoy the square you stare at for many hours a day.
4. [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/): I'm kind of a Firefox lifer, even though they seem to be selling out at the time of writing. I'm not even sure what the Developer Edition offers beyond the standard edition at this point, but the developer tools are top notch. And they let me continue to use [uBlock Origin](https://ublockorigin.com/).
5. [Astro](https://www.astro.build/): A flexible JavaScript framework for building websites. It feels familiar if you have ever built anything with React, but unlike React, it does not ship any JavaScript to the client unless you intentionally add it. This is great for speed and accessibility!

At the time of writing, I work on a Mac. With each passing day I dream of going full Linux in an effort to decouple myself from large corporations and further alienate myself from everyone else (kidding on that last one, _kinda_).

## Design the site

I like to think I have an eye for design but I am not a designer. So step 0 for me is to shop around for inspiration. It's probably step 0 for a lot of folks, but it's very important for me. I can humbly submit that these sites are excellent and they heavily inspired what I wanted to do here:

- [HeydonWorks](https://heydonworks.com/)
- [Henry from Online](https://henry.codes/)
- [MAXIMUM ROCKNROLL](https://www.maximumrocknroll.com/)

I typically design my projects with a text editor and a browser because this is where I feel the most confident. Designing this way has the following side-effects:

1. I can write semantic HTML without any distractions — I'm not worried about how a framework handles something or how I'm going to break things out into reusable components — I'm worried about making sure I'm designing to put independent, self-contained content in an <code>&lt;article&gt;</code>
2. I can write most of my base styles, do some basic layout work, and generally knock out the CSS for how I want the site to look

This method is not foolproof! Without fail, I always have much more to work out when I move to the actual project. Also, if I were building websites _for a living_, I would absolutely invest in more design skills with regard to prototyping. But this works for my small projects.

Stay tuned for the next installment in this series where I discuss the next steps I took to build this site.
