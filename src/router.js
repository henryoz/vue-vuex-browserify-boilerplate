import Hello from './components/Hello.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

var router = new VueRouter();


Vue.use(VueRouter);

// Specify new routes
router.map({
  '/hello': {
    component: Hello
  }
});

// Handle default routing
router.redirect({
  '*': '/hello'
});

export default router;
