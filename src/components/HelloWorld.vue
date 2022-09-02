<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo_main.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to East Carolina Sports Book
        </h1>

        <p class="subheading font-weight-regular">
          This website allows you to look at and "bet" on upcoming ECU football games,
          <br>head over to the Account page where you will start with 100pts. 
          <br>Good Luck!
          
        </p>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    
 
  }),
}
</script>
