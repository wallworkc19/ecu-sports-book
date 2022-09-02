<template>
  <v-app>
    <v-main>
      <v-toolbar color="#cfb53b">
        <v-toolbar-title>East Carolina Sports Book</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat>Games</v-btn>
          <v-btn flat>Sign Up</v-btn>
          <v-btn flat>Login</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <HelloWorld/>
      </v-content>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { HelloWorld }
}
</script>
