# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple static website for ziAI (www.ziai.com.au) - a single-page "coming soon" landing page. The project consists of:

- `index.html` - Main landing page with ziAI branding and "launching soon" message
- Font files (Alegreya SC and Average) for custom typography
- `CNAME` file for GitHub Pages hosting on custom domain

## Architecture

This is a minimal static HTML project with no build system, dependencies, or backend. The structure is:

- Single HTML file with embedded CSS
- Custom fonts loaded from local files and Google Fonts
- Blue theme (#2d5986) with white text
- Responsive design using flexbox

## Development

Since this is a static HTML site:

- **No build step required** - files can be served directly
- **No package manager** - pure HTML/CSS with no dependencies  
- **No testing framework** - visual inspection of the single page
- **No linting tools** - standard HTML/CSS validation tools can be used

To work with this project:
1. Edit `index.html` directly for content changes
2. Test by opening the file in a browser or using a simple HTTP server
3. Deploy by pushing to the GitHub Pages branch (files are served from root)

## Hosting

The site is configured for GitHub Pages with a custom domain (www.ziai.com.au) via the CNAME file.