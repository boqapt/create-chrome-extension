# Chrome Extension Utils

Utility functions to bootstrap a project for developing any kind Chrome extensions.
This is a subset of [Create Chrome Extension](https://github.com/schovi/create-chrome-extension) for
those who don't want all the Webpack dependencies in, and who want to manage their own Webpack Configuration.

## Extension features support

- [Browser action](https://developer.chrome.com/extensions/browserAction)
- [Page action](https://developer.chrome.com/extensions/pageAction)
- [Background Pages (Scripts)](https://developer.chrome.com/extensions/background_pages)
  - Support both background scripts or page
- [Content scripts](https://developer.chrome.com/extensions/content_scripts)
  - Supports only scripts. Stylesheets can be easily made and use with webpack
- [Override Pages](https://developer.chrome.com/extensions/override)
  - You can customize **newtab**, **history**, or **bookmarks**

## Installation

In your project
`npm install -D chrome-extension-utils`