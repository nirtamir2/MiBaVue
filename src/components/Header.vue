<template>
  <v-toolbar class="secondary">
    <v-toolbar-title class="hidden-sm-and-down">MiBa</v-toolbar-title>
    <v-text-field prepend-icon="search" label="Search..." hide-details single-line dark></v-text-field>
    <v-menu bottom left offset-y origin="top right" transition="v-slide-y-transition">
      <v-btn icon dark slot="activator">
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list>
        <v-list-item v-for="item in dropdown_items" :key="item">
          <v-list-tile>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
  export default {
      data() {
          return {
            dropdown_items: [{title: 'about'}, {title: 'share'}]
          }
      }
  }
</script>
