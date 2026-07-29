# Field Notes

A Markdown-first personal technical journal built with Astro and deployed to
GitHub Pages.

## Write a post

Add a Markdown file to `src/content/posts/` with this frontmatter:

```yaml
---
title: "Post title"
description: "A short summary."
published: 2026-07-29
updated: 2026-08-01 # optional
tags:
  - nuc-server
  - homelab
draft: false
---
```

Fenced code blocks, Markdown tables, and Mermaid diagrams are supported. Use a
`mermaid` fenced block for diagrams.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages

Push the repository to GitHub, then choose **Settings → Pages → Source → GitHub
Actions**. Every push to `main` will build and deploy the site. The workflow
automatically supports both `username.github.io` repositories and project sites.

For a custom domain later, configure it in the repository's Pages settings.
