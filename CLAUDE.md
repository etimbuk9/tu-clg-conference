# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page website for Topfaith University's **1st International Conference on Leadership and Governance** (July 2, 2026). The site will be hosted as a page on topfaith.edu.ng.

No build step — plain HTML, CSS, and JS. Open `index.html` directly in a browser to preview.

## Deployment

Hosted on **Render** as a static site from the `etimbuk9/tu-clg-conference` GitHub repo.
- Publish directory: `./`
- Build command: *(none)*
- Render auto-deploys on every push to `main`.

## Design System

Matches topfaith.edu.ng. Key tokens:

| Token | Value |
|---|---|
| Primary (navy) | `#314991` |
| Accent (purple) | `#6F448D` |
| Gray | `#9a9fbd` |
| Page background | `#f2f2f2` |
| Footer background | `#10002b` |
| Font | `"Mulish"` (Google Fonts) |
| CSS framework | Bootstrap 5.0.2 (CDN) |
| Icons | Font Awesome 5.15.2 (CDN) |

All custom CSS goes in `css/styles.css`. Do not override Bootstrap by editing its CDN link — use CSS custom properties (`--tu-navy`, `--tu-purple`, etc.) and utility class overrides in `styles.css`.

## Architecture

Everything is a single scrollable page (`index.html`) with anchor-linked sections in this order:

`#hero` → `#about` → `#subthemes` → `#speakers` → `#abstracts` → `#registration` → `#contact` → `<footer>`

`js/main.js` handles three behaviours — all self-contained IIFEs:
1. **Countdown timer** — targets `2026-07-02T00:00:00+01:00` (WAT), reads/writes `#cd-days`, `#cd-hours`, `#cd-minutes`, `#cd-seconds`
2. **Sticky navbar** — adds `.scrolled` class to `#main-nav` on scroll
3. **Active nav highlighting** — IntersectionObserver watches each section and toggles `.active` on the matching `#main-nav .nav-link`

## Placeholders Still Outstanding

| Location | Item |
|---|---|
| Speakers section | Dr. Uwem Ite — title and affiliation |
| Speakers section | Dr. Andy Eyo — title and affiliation |

## Git Workflow

```bash
git add <files>
git commit -m "message"
git push   # auto-deploys to Render
```

Source document (not committed): `TU CLG Conference Website Content.docx`
