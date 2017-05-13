<template>
  <div>
    <div class = "ma-4">
      <v-text-field
        label="Title"
        class="input-group--focused"
        v-model="groupName"
      ></v-text-field>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        groupName: ""
      };
    }
  }
</script>
