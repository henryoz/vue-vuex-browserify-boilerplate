import Vue from 'vue'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import router from './router'
import App from './App.vue'

// TODO: figure out a way to ensure this only applies in dev, never prod!
Vue.config.devtools = true;

/* eslint-disable no-new */
sync(store, router)

router.start(App, '#app')


// new Vue({
//   store,
//   el: 'body',
//   components: { App }
// });
