# vue-vuex-browserify-boilerplate

> A Vue.js scaffold. Made by henryoz

## Features
- Full ES2015 support with linting for <a href="https://github.com/airbnb/javascript" target="_blank">AirBnB JavaScript style guide</a>.
- Vueify support for both all-in-one components and separated script, template, and style partials.
- Synchronised routes and states via vue/vuex-router-sync
- vue-resource for easy XHR.
- node-sass support for more powerful stylesheets.
- Skeleton Vuex store and actions.
- Bourbon mixins &amp; Neat grid available in all component stylesheets / tags.
- JS unit tests via Karma (might swap out for Mocha / Chai but this is worth a try first).
- Fresh minty taste.

## Todo
- Configure as standalone vue-cli template


## Installation Instructions
``` bash
# clone repo
git clone git@github.com:henryoz/vue-vuex-browserify-boilerplate.git your-project-name

# cd into project
cd your-project-name

# install dependencies
npm install
```

## Build Setup

``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# lint all *.js and *.vue files
npm run lint

# run unit tests
npm test
```

## Resources
- <a href="http://vuex.vuejs.org/en/intro.html" target="_blank">Vuex</a>: centralised state management architecture for Vue.
- <a href="https://github.com/vuejs/vueify" target="_blank">Vueify</a>: .vue file support and partial management.
- <a href="http://router.vuejs.org/en/index.html" target="_blank">vue-router</a>: app routing for Vue.
- <a href="https://github.com/vuejs/vuex-router-sync" target="_blank">veux-router-sync</a>: keeps the router in sync with the vuex store.
- <a href="https://github.com/vuejs/vue-resource" target="_blank">vue-resource</a>: XHR / JSONP web request and response handling for Vue.
- <a href="http://bourbon.io/docs/" target="_blank">Bourbon</a>: Bourbon mixin library. Check before trying to do anything even vaguely fancy with css!
- <a href="http://thoughtbot.github.io/neat-docs/latest/" target="_blank">Neat</a>: Neat grid usage.
