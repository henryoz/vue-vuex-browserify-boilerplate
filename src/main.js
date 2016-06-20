import Vue from 'vue'
import store from './vuex/store'
import App from './App.vue'

// TODO: figure out a way to ensure this only applies in dev, never prod!
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: { App }
});
