<template>
  <div id="app">
    <v-app>
      <app-header></app-header>
      <v-slide-x-transition	>
      <router-view></router-view>
      </v-slide-x-transition>
    </v-app>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import GroupList from './components/GroupList.vue';

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appGroupList: GroupList
    }
  }
</script>

<style>

</style>
