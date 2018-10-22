**Deprecated**: Converse.js upstreame has merged support for separate `@converse/headless` package which can be used in a webpack project. Use it instead.

# Using Converse.js Headless in a Webpack-bundled project

This repository contains NPM package which depends on packages which are required to use Converse.js as a library within your Webpack-bundle application.

In order to use it add this package to the bundle first:

    $ npm install --save-dev git+https://github.com/cmrd-senya/converse.js-headless.git

Then add modules to resolve.alias in your Webpack config:

```js
// ...
module.exports = {
  // ...
  resolve: {
    alias: {
      "almond":                   "almond/almond",
      "awesomplete":              "awesomplete-avoid-xss/awesomplete",
      "babel":                    "requirejs-babel/babel-5.8.34.min",
      "backbone":                 "backbone/backbone",
      "backbone.browserStorage":  "backbone.browserStorage/backbone.browserStorage",
      "backbone.noconflict":      "converse.js/src/backbone.noconflict",
      "backbone.overview":        "backbone.overview/backbone.overview",
      "emojione":                 "emojione/lib/js/emojione",
      "es6-promise":              "es6-promise/dist/es6-promise.auto",
      "eventemitter":             "otr/build/dep/eventemitter",
      "form-utils":               "converse.js/src/form-utils",
      "jquery":                   "jquery/dist/jquery",
      "jquery.browser":           "jquery.browser/dist/jquery.browser",
      "jquery.noconflict":        "converse.js/src/jquery.noconflict",
      "lodash":                   "lodash/lodash",
      "lodash.converter":         "converse.js/3rdparty/lodash.fp",
      "lodash.fp":                "converse.js/src/lodash.fp",
      "lodash.noconflict":        "lodash/lodash",
      "pluggable":                "pluggable.js/dist/pluggable",
      "polyfill":                 "converse.js/src/polyfill",
      "sizzle":                   "sizzle/dist/sizzle",
      "strophe":                  "strophe.js/strophe",
      "strophe.disco":            "strophejs-plugin-disco/strophe.disco",
      "strophe.ping":             "strophejs-plugin-ping/strophe.ping",
      "strophe.rsm":              "strophejs-plugin-rsm/strophe.rsm",
      "strophe.vcard":            "strophejs-plugin-vcard/strophe.vcard",
      "text":                     "text/text",
      "tpl":                      "lodash-template-loader/loader",
      "typeahead":                "components/typeahead.js/index",
      "underscore":               "lodash/lodash",
      "utils":                    "converse.js/src/utils",
      "xss":                      "xss/dist/xss",
      "xss.noconflict":           "converse.js/src/xss.noconflict",

      "i18n": "converse.js/src/i18n",

      "converse-bookmarks":       "converse.js/src/converse-bookmarks",
      "converse-chatboxes":       "converse.js/src/converse-chatboxes",
      "converse-chatview":        "converse.js/src/converse-chatview",
      "converse-controlbox":      "converse.js/src/converse-controlbox",
      "converse-core":            "converse.js/src/converse-core",
      "converse-disco":           "converse.js/src/converse-disco",
      "converse-dragresize":      "converse.js/src/converse-dragresize",
      "converse-headline":        "converse.js/src/converse-headline",
      "converse-inverse":         "converse.js/src/converse-inverse",
      "converse-mam":             "converse.js/src/converse-mam",
      "converse-minimize":        "converse.js/src/converse-minimize",
      "converse-muc":             "converse.js/src/converse-muc",
      "converse-muc-embedded":    "converse.js/src/converse-muc-embedded",
      "converse-notification":    "converse.js/src/converse-notification",
      "converse-otr":             "converse.js/src/converse-otr",
      "converse-ping":            "converse.js/src/converse-ping",
      "converse-register":        "converse.js/src/converse-register",
      "converse-roomslist":       "converse.js/src/converse-roomslist",
      "converse-rosterview":      "converse.js/src/converse-rosterview",
      "converse-singleton":       "converse.js/src/converse-singleton",
      "converse-vcard":           "converse.js/src/converse-vcard"
    }
  }
  // ...
}
```

After this you should be able to use Converse.js as a ES2016 module from your application:

```js
  import converse from 'converse.js-headless'
```

And then just use `converse` object as described in [the official Converse.js documentation](https://conversejs.org/docs/html/).
