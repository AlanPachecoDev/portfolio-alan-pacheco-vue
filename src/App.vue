<template>
  <v-app>
    <Nav_Bar></Nav_Bar>
    <!-- <v-main>
      <HelloWorld/>
    </v-main> -->
    <router-view />
  </v-app>
</template>

<script>
import Nav_Bar from './components/Nav_Bar.vue'

export default {
  name: 'App',

  components: {
    Nav_Bar,
  },

  data: () => ({
    //
  }),
}
</script>
<style>

</style>
