# edu-blog-md

This repository contains the source code for the educational blog platform designed for computer science courses.

## Overview

The blog is built using [Nuxt Content](https://content.nuxtjs.org/) to deliver course materials in Markdown format, automatically generating accessible HTML pages. It serves as a centralized hub for students and educators, offering organized lecture notes, practical tasks, and additional resources.

## Setup

To start using this repository, first install the necessary dependencies:

```bash
# pnpm
pnpm install

# yarn
yarn install

# npm
npm install

# bun
bun install
```

## Development Server

Start the development server on [http://localhost:3000](http://localhost:3000):

```bash
npm run dev
```

## Production

You can deploy the blog using popular platforms:

[![Deploy with NuxtHub](https://hub.nuxt.com/button.svg)](https://hub.nuxt.com/new?repo=sai308/edu-blog-md)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsai308%2Fedu-blog-md)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fsai308%2Fedu-blog-md)

### Building for Production

To build the blog for production:

```bash
npm run build
```

To locally preview the production build:

```bash
npm run preview
```

For more details, refer to the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## Acknowledgments

This project was inspired by and adapted from the [shadcn-docs-nuxt](https://github.com/ZTL-UwU/shadcn-docs-nuxt) starter template. Special thanks to the original author for providing a robust foundation for this project.
