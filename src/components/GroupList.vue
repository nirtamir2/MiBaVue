<template>
  <div>
    <v-list two-line>
      <template v-for="item in list">
        <v-list-item :key="item.title">
          <v-list-tile ripple>
            <v-list-tile-avatar>
              <img :src="item.avatar"/>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"/>
              <v-list-tile-sub-title v-text="item.subtitle"/>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </template>
    </v-list>
    <v-btn primary floating dark class="fabLocation" @click.native="addGroup">
      <v-icon>edit</v-icon>
    </v-btn>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          {avatar: 'http://lorempixel.com/400/200', title: 'Baaarunch this weekend?', subtitle: "..."},
          {avatar: 'http://lorempixel.com/400/200', title: 'Summer BBQ', subtitle: "..."},
          {avatar: 'http://lorempixel.com/400/200', title: 'Qui Qui', subtitle: "..."}
        ]
      }
    },
    methods: {
      addGroup()
      {
        this.$router.push({name: 'AddGroupFriends'});
      }
    }
  }
</script>
<style scoped>
  .fabLocation {
    position: fixed;
    right: 15px;
    bottom: 15px;
  }
</style>
