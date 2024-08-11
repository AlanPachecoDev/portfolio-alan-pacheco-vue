<template>
  <v-app>
    <Nav_Bar></Nav_Bar>
    <!-- <v-main>
      <HelloWorld/>
    </v-main> -->
    <RouterView></RouterView>
  </v-app>
</template>

<script>
import { RouterView } from "vue-router";

import Nav_Bar from './components/Nav_Bar.vue'

export default {
  name: 'App',

  components: {
    Nav_Bar,
    RouterView
  },

  data: () => ({
    //
  }),
}
</script>
<style>

</style>
