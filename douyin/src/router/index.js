import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/footer/Home'
import Message from '@/components/footer/Message'
import My from '@/components/footer/My'
import Recom from '@/components/footer/Recom'
import Beijing from '@/components/Header/Beijing'
import Hrecom from '@/components/Header/Recom'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/home/recom',
      children:[
        {
          path: '/home',
          name: 'Home',
          component: Home,
          children:[
            {
              path: '/home/recom',
              name: 'Hrecom',
              component: Hrecom,
            },
            {
              path: '/home/beijing',
              name: 'Beijing',
              component: Beijing,
            }
          ]
        },
        {
          path: '/message',
          name: 'Message',
          component: Message,
        },{
          path: '/my',
          name: 'My',
          component: My,
        },
        {
          path: '/recom',
          name: 'Recom',
          component: Recom,
        }
      ]
    }
  ]
})
