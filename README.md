# README

## Install pnpm

```bash
brew install pnpm
```

## Install and Run in Dev

Setup `.env` following example in `.env.example`.

```bash
pnpm install
pnpm dev
open http://localhost:9999
```

## ESLint Install

<https://github.com/antfu/eslint-config>

`antfu/eslint` is nice because there is no need to install Prettier and files are formatted on save automatically.

[Reconfigure IDE settings](https://github.com/antfu/eslint-config?tab=readme-ov-file#ide-support-auto-fix-on-save)

```bash
pnpm dlx @antfu/eslint-config@latest
pnpm install # install the added dependencies
```
