# Accelerate CMS!

This is a Turborepo containing both a `Storybook React Components library` and a `Remix application` to be used as a `CMS`.

## General Info

This Monorepo uses [pnpm](https://pnpm.io/) and [turborepo](https://turborepo.org/) to manage both the `apps` and `packages` folder.

### Monorepo Structure

```
/apps
  /simple-cms
  /live-preview
  /[possible-new-app]
/packages
  /ui
  /[possible-new-package]
```

## CMS

### Built with:

- [Remix](https://remix.run/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)

## UI

### Built with:

- [React](https://reactjs.org/)
- [Storybook](https://storybook.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Getting Started

### -> First, install `nvm`:

Ref Linux/Mac: [Install Node using nvm](https://github.com/nvm-sh/nvm)

Ref Windows: [Install Node using nvm-windows](https://github.com/coreybutler/nvm-windows)

### -> Then, install this repo node version with `nvm`:

```shell
$ nvm install
```

### -> Then, install `pnpm` globally with `npm`:

```shell
$ npm i -g pnpm
```

### -> Then, install everything at the root of `accelerate_cms`:

```shell
$ pnpm i
```

### -> Now you can read further each project to individually get them running:

### Apps

- [CMS](https://github.com/SalesPerformanceInt/accelerate_cms/tree/main/apps/cms)

### Packages

- [UI](https://github.com/SalesPerformanceInt/accelerate_cms/tree/main/packages/ui)
