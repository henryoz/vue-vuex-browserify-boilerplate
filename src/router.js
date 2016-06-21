import Hello from './components/Hello.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter()

// Specify new routes
router.map({
  '/hello': {
    component: Hello
  }
})

// Handle default routing
router.redirect({
  '*': '/hello'
})

export default router
