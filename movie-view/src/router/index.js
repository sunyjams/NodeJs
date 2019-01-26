import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'

Vue.use(Router)

const VIP = {template:''}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/user/:id',
      component:User,
      children:[
        {
          path:'vip',
          component:VIP
        }
      ]
    }
  ]
})
