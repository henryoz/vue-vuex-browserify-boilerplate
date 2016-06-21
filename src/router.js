import Hello from './components/Hello.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/hello': {
    component: Hello
  }
})

router.redirect({
  '*': '/hello'
})

export default router
