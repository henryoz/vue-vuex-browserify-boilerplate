# vue-vuex-browserify-boilerplate

> A Vue.js scaffold. Made by henryoz

## Features
- Full ES2015 support within components.
- Vueify support for both all-in-one components and separated script, template, and style partials.
- Synchronised routes and states via vue/vuex-router-sync
- node-sass support for more powerful stylesheets.
- Skeleton Vuex store and actions.
- JS unit tests via Karma (might swap out for Mocha / Chai but this is worth a try first).
- Fresh minty taste.

## Todo
- Add vue-resource
- Add Bourbon + Neat
- Configure ESLint for AirBnB ES2015
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
- [Vuex](http://vuex.vuejs.org/en/intro.html) - centralised state management architecture for Vue
- [Vueify](https://github.com/vuejs/vueify) - .vue file support and partial management
- [vue-router](http://router.vuejs.org/en/index.html) - app routing for Vue
- [veux-router-sync](https://github.com/vuejs/vuex-router-sync) - keeps the router in sync with the vuex store
