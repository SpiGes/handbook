# SpiGes-docs

Documentation of SpiGes project

[![Check Build](https://github.com/SpiGes/handbook/actions/workflows/check_build.yml/badge.svg)](https://github.com/SpiGes/handbook/actions/workflows/check_build.yml)
[![Automated Release](https://github.com/SpiGes/handbook/actions/workflows/release.yml/badge.svg)](https://github.com/SpiGes/handbook/actions/workflows/release.yml)

This repository contains the source of the SpiGes handbook, a static site built with [Hugo](https://gohugo.io/) (using the [Docsy](https://www.docsy.dev/) theme) and published at [https://spiges.github.io/handbook](https://spiges.github.io/handbook).

## Requirements

- [Node.js](https://nodejs.org/) and [Dart Sass](https://sass-lang.com/dart-sass/), matching the versions in [tool-versions.json](tool-versions.json)
- [Hugo Extended](https://gohugo.io/) (installed automatically as a dev dependency via `hugo-extended`, version pinned in [package.json](package.json))
- [Docsy](https://www.docsy.dev/) theme (installed automatically as a dev dependency via `@docsy/theme`, version pinned in [package.json](package.json))

## Getting started

```bash
npm install
npm run serve
```

`npm run serve` starts a local Hugo dev server with live reload.

> [!IMPORTANT]
> Running `npm install` requires local permissions to build/execute npm packages, and it requires the connected network to allow `npm install` (fetching packages from the npm registry).
>
> Within the federal administration network, `npm install` typically does **not** work because the registry is not reachable. In that case:
>
> 1. Trigger the `Generate node files (node_modules and package-lock.json)` GitHub Actions workflow ([generate_node_files.yml](.github/workflows/generate_node_files.yml)) manually (`workflow_dispatch`).
> 2. Once the run finishes, download the `node_modules` and `package-lock` artifacts from the workflow run.
> 3. Extract the `node_modules` archive (password-protected, see the workflow file) and copy it, together with `package-lock.json`, into your local clone of this repository.
> 4. You can then run `npm run serve` / `npm run build` locally without needing `npm install`.

## NPM scripts

| Script | Description |
| --- | --- |
| `build` | Build the site in development mode (drafts, future and expired content included) |
| `build:production` | Build the site in production mode (minified) |
| `build:ci:production` | Production build used in CI, with a configurable `BASE_URL` |
| `serve` | Build (dev mode) and serve the site locally with live reload |
| `serve:production` | Build (production mode) and serve the site locally |
| `rebuild` | Clean the output directories, then run `build` |
| `clean` | Remove the `public` and `resources` output directories |

## Languages

Content is available in German (default), French and Italian, with an English placeholder. See the `[languages]` section in [hugo.toml](hugo.toml).

## Project structure

- `content/` – Markdown content per language (`de`, `en`, `fr`, `it`)
- `layouts/` – Hugo layouts, partials and shortcodes
- `assets/` – JS/SCSS sources processed by Hugo Pipes
- `i18n/` – UI translation strings
- `archetypes/` – templates used when scaffolding new content pages

## Contributing

Formatting and linting are enforced via `.markdownlint.json`, `.prettierrc`, `.stylelintrc.json` and `eslint.config.mjs`. Please run the relevant linters before submitting a pull request.

## CI/CD

GitHub Actions workflows (see [.github/workflows](.github/workflows)) handle build checks, releases, and automated issue/PR setup.

## Changelog & release notes

See [CHANGELOG.md](CHANGELOG.md) and [RELEASE_NOTES.md](RELEASE_NOTES.md).

## License

This work is licensed under [CC BY-NC-ND 4.0](LICENSE.md).
