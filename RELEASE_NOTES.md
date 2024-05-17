# Release Notes - SpiGes Documentation Version [0.1.0-pre-pilot-4]

**Release Date:** 2024.05.17

## What's New

### Documentation

- [#38](https://github.com/SpiGes/handbook/issues/38) - Information about eIAM portal

### Others

- [#46](https://github.com/SpiGes/handbook/issues/46) - Inform about warnings/errors from linters (markdownlint, eslint, stylelint) on GitHub
    - The main goal is to know the number of warnings/errors of the linter (e.g.: markdownlint, eslint, stylelint) during a Pull-Request
    - Set thresholds or fail the job of the workflow on errors to see in the PR that there is a problem 

## Improvements

### Others

- [#48](https://github.com/SpiGes/handbook/issues/48) - Improve the CSS selector allowing to remove the margin-bottom of the paragraphs in the FAQ
    - This selector is too general and another one more specific to the FAQ must be used
- [#53](https://github.com/SpiGes/handbook/issues/53) - As for SpiGes application, only three languages must be available
    - Only the three following languages must be available:
        - Deutsch (DE)
        - Français (FR)
        - Italiano (IT)
- [#55](https://github.com/SpiGes/handbook/issues/55) - Update layout/format of the FAQ pages
    - Correction of warnings
    - Use new shortcodes to improve the layout/format
- [#57](https://github.com/SpiGes/handbook/issues/57) - Update release pipeline to only be executable with main branch
    - Presently, the release pipeline allows selecting any available branch.
To avoid mistakes, the workflow checks if the selected branch is main, otherwise the workflow fails.
- [#61](https://github.com/SpiGes/handbook/issues/61) - Reorganize the javascript files + add new eslint rules
    - The goal is to reorganize the javascript files as what is expected for the scss files, especially with the shortcodes

## Fixes

### Others

- [#40](https://github.com/SpiGes/handbook/issues/40) - A language change doesn't redirect to the same page

## Contributors

- **SpiGes documentation team**.

**Thank you for continuing to use SpiGes documentation. We hope these updates make your experience even better.**
