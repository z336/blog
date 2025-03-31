---
layout: ../../layouts/PostLayout.astro
title: "How to build this website, part two"
pubDate: 2025-03-30
category: "How-to"
tags: ["HTML", "CSS", "Accessibility"]
description: "The second post in the how to build this website series."
lede: ""
---

This is part two in my series about building this website.

So far, I have set some goals for what I want to accomplish with this website, I chose my tools — these don't very change often, but they can and do occasionally, and I designed my site by looking for inspiration and without reaching for a framework (yet).

Check out [How to build this website, part one](/writing/how-to-make-this-website-part-one) if you want to review in more detail.

Now let's take a look creating the project with the framework and organizing the directories:

## Create the project

First, I opened my terminal and I used Astro's <code>create astro</code> setup wizard.

I use [npm](https://www.npmjs.com/), for better or worse, so the command I entered was the following: <code>npm create astro@latest -- --template minimal</code>. Astro supports <code>pnpm</code> and <code>Yarn</code> as well, so knock yourself out if you'd rather work with one of those tools.

The setup wizard is mercifully short, so I had a named project on my machine in no time. Astro also keeps the boilerplate in a project to a minimum, which is nice because nobody wants to delete 15 files before they ever get started anyway.

The [Astro tutorial](https://docs.astro.build/en/tutorial/0-introduction/) is an excellent resource if you have never done this before and you are looking for more detail than I am sharing here. I will read it or even work through it every now and again because it's easy to forget details, things change as projects make updates to their tools, and frankly I don't get to build as many websites as I would like to build.

## Create the folder structure

Websites all tend to need the same things to function, it's just that different frameworks may ask you to keep them in different places. For this website, I had a pretty good idea of what I was looking to build, so I created the following directories and files:

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

Note that there are many other files up and down the tree, but generally these are what I work with. See [Project structure](https://docs.astro.build/en/basics/project-structure/) for Astro's more detailed explanation of these folders from their perspective.

Let's break these down based on what I use them for:

### <code>public/</code>

I place site wide <code>svg</code> files here, such as favicons and the external link icon I append to ...external links. This is also where files such as <code>robots.txt</code> go. Basically, it is for non-code, unprocessed assets.

### <code>src/</code>

I place all of the rest of the directories and files for the project here. This is the project's source code.

### <code>src/assets/</code>

Custom font files go here. I would also keep images here, but at the time of writing, I'm trying to keep this site minimal and I don't want to bother with images. Some folks use different conventions for naming this folder — this is just what I am used to.

### <code>src/components/</code>

Reusable blocks of HTML go here. If you have worked with React before, this is a very familiar concept — all the way down to the capital letter naming convention for these files. While this directory is never required in a project, chances are you will use it.

### <code>src/layouts/</code>

Reusable layouts go here. I only have two for this site: <code>Layout</code> and <code>PostLayout</code>, which extends <code>Layout</code> but is specific to blog posts. This is also not required but I bet you use it.

### <code>src/pages/</code>

Page files and sub-directories for more pages go here. Astro definitely requires this directory.

### <code>src/pages/links/</code>

The files needed to create a links page and to store the data for those links goes here.

### <code>src/pages/notes/</code>

This directory holds the notes page, the data for those notes, and a special file that dynamically generates permanent note page for each note during build time.

### <code>src/pages/writing/</code>

Long form blog blosts go into this folder. You can certainly get fancy by creating ways to dynamically create pages based on custom URLs, but I tend to keep it simple for myself and just name files with the slug I want to use.

### <code>src/styles/</code>

CSS files all go here. I use a specific methodology for organizing these files that I will explain in another post.

### <code>src/utils/</code>

Helper JavaScript files go here. At the time of writing, I only have two: a function for formatting dates and a function that turns note titles into strings that can be used slugs.
