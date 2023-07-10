# Quick Check!

This is a Turborepo containing both a `Storybook React Components library` (quickcheck-shared) and two `Remix applications`, one being the `Quick Check app` and the other a `Live Preview app` based on Quick Check.

## General Info

This Monorepo uses [pnpm](https://pnpm.io/) and [turborepo](https://turborepo.org/) to manage both the `apps` and `packages` folder.

### Monorepo Structure

```
/apps
  /quick-check
  /live-preview
  /[possible-new-app]
/packages
  /quickcheck-shared
  /[possible-new-package]
```

## QuickCheck

### Built with:

- [Remix](https://remix.run/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)

## QuickCheck Shared

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

### -> Then, install everything at the root of `accelerate-quick-check`:

```shell
$ pnpm i
```

### -> Now you can read further each project to individually get them running:

### Apps

- [Live Preview](https://github.com/SalesPerformanceInt/accelerate-quick-check/tree/main/apps/live-preview)
- [QuickCheck](https://github.com/SalesPerformanceInt/accelerate-quick-check/tree/main/apps/quick-check)

### Packages

- [QuickCheck Shared](https://github.com/SalesPerformanceInt/accelerate-quick-check/tree/main/packages/quickcheck-shared)
