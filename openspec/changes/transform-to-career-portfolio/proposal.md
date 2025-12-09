# Change: Transform to Career Portfolio Website

## Why
The current project is a VuePress documentation site that needs to be transformed into a modern, visually appealing personal career portfolio website. The site should showcase four distinct career periods (2007-2012 telecom, 2012-2018 gaming, 2018-2020 SaaS/blockchain, 2020-present quant trading) with room for future expansion. The site must deploy successfully on Vercel with modern design, animations, and images.

## What Changes
- **BREAKING**: Migrate from VuePress 1.x to a modern Vercel-supported framework (Next.js recommended)
- **BREAKING**: Restructure content from documentation format to career timeline/portfolio format
- Add career timeline component displaying four career periods
- Add visual design system with animations and image support
- Implement responsive layout optimized for portfolio presentation
- Add extensible structure for future career period details
- Update Vercel configuration for new build system
- Remove old documentation structure (fintech, ecommerce, games, telecom folders)

## Impact
- Affected specs: New capability `career-portfolio`
- Affected code: 
  - Complete rebuild of frontend structure
  - New `pages/` or `app/` directory structure (Next.js)
  - New components for career timeline, sections, animations
  - Updated `vercel.json` configuration
  - New `package.json` dependencies
- Migration: Old VuePress docs can be archived or removed

