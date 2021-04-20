# Reina's AniList UserScript

Here I'll be be bundling all the userscripts I make for AniList.

## Install Guide

- Coming soon

## Current Functionality

- Adds a "replace" button under posts which will convert emoji to unicode which AniList can understand.

## Contribution Guide

- Run `npm install` to install node modules. Required every time package.json has changed

- Use `npm run watch` to build on each save. Useful when you have the userscript running from a local file. You can easily setup that with [Violentmonkey](https://violentmonkey.github.io/posts/how-to-edit-scripts-with-your-favorite-editor/#install-a-local-script). <br> Otherwise, you can run `npm run build` to manually build the userscript and import it yourself.

- Uses [userscripter](https://github.com/SimonAlling/userscripter) framework with TypeScript.

- Write script modules in `src/modules`.

- Add them to `src/operations` to have them run. Follow the existing formating.

- `src/helpers` has some useful tools you can utilise. Their documentation should show up in VSCode's Intellisense.

- More coming soon.
