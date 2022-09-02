<template>
  <v-app>
    <v-main style="background-color:#7851a9;">
      <v-toolbar color="#cfb53b">
        <v-toolbar-title >East Carolina Sports Book</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat router-link to="/">Home</v-btn>
          <v-btn flat router-link to="/games">Games</v-btn>
          <v-btn flat>Sign Up</v-btn>
          <v-btn flat>Login</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>


export default {
    name: "App",
    data: () => ({
    //
    })
}
</script>
