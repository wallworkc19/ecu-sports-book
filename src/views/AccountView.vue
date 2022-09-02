<script setup>
    import { Authenticator } from '@aws-amplify/ui-vue';
    import '@aws-amplify/ui-vue/styles.css';
  </script>
<template>
  <br><br>
  <authenticator>
    <template v-slot="{ signOut }">
      <div class="text-center">
        <h1>Welcome to your account!</h1>
        <h2>You currently have 100 points</h2>
        <br><br>
        <button @click="signOut"><h3> Click to Sign Out </h3></button>
      </div>
    </template>
  </authenticator>
</template>


