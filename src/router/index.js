import Vue from 'vue'
import Router from 'vue-router'
import GroupList from '@/components/GroupList'
import AddGroupFriends from '@/components/AddGroupFriends'
import AddGroupData from '@/components/AddGroupData'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GroupList',
      component: GroupList
    },
    {
      path: '/addGroupFriends',
      name: 'AddGroupFriends',
      component: AddGroupFriends
    },
    {
      path: '/addGroupData',
      name: 'AddGroupData',
      component: AddGroupData
    }
  ]
})
