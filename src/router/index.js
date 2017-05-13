import Vue from 'vue'
import Router from 'vue-router'
import GroupList from '@/components/GroupList'
import AddGroup from '@/components/AddGroup'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GroupList',
      component: GroupList
    },
    {
      path: '/addGroup',
      name: 'AddGroup',
      component: AddGroup
    }
  ]
})
