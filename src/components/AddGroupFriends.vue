<template>
  <div>
    <h6 class = "ma-4">chosen people:</h6>
    <v-container>
      <v-row>
        <div v-for="contact in selectedContacts">
          <v-chip close>
            <v-avatar>
              <img :src=contact.avatar>
            </v-avatar>
            {{contact.name}}
          </v-chip>
        </div>
      </v-row>
    </v-container>
    <h6 class = "ma-4">select people to add to the group:</h6>
    <v-list>
      <v-list-item v-for="item in contacts" :key="item.title">
        <v-list-tile avatar ripple>
          <v-list-tile-avatar>
            <img :src="item.avatar"/>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
    </v-list>
    <v-btn primary floating dark class="fabLocation" @click.native="addGroupData">
      <v-icon>navigate_next</v-icon>
    </v-btn>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        contacts: [
          {avatar: 'http://lorempixel.com/400/200', title: 'Baaarunch this weekend?'},
          {avatar: 'http://lorempixel.com/400/200', title: 'Summer BBQ'},
          {avatar: 'http://lorempixel.com/400/200', title: 'Qui Qui'}],

        selectedContacts: [
          {avatar: 'http://lorempixel.com/400/200', name: 'Baaarunch this weekend?'},
          {avatar: 'http://lorempixel.com/400/200', name: 'Summer BBQ'},
          {avatar: 'http://lorempixel.com/400/200', name: 'Qui Qui'}]

      }
    },
    methods:{
        addGroupData()
        {
            this.$router.push({name: 'AddGroupData'})
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
