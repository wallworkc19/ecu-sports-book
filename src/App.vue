<script setup>
  import { Authenticator } from "@aws-amplify/ui-vue";
  import Amplify from "aws-amplify";
  import "@aws-amplify/ui-vue/styles.css";

  import awsconfig from './aws-exports';
  Amplify.configure(awsconfig);
</script>

<style>
  ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #cfb53b;
  }

  li {
      float: left;
  }

  li a {
      display: block;
      color: black;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
  }

  li a:hover {
      background-color: #5C5C5C;
  }
  table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
  }

  td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
  }

  tr:nth-child(even) {
      background-color: #dddddd;
  }
</style>

<template>
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ECU Sports Book</title>
        
  </head>
    
  <authenticator>
    <template v-slot="{ user, signOut }">
      <body style="background-color:#7851a9;">
        <div id="app">
            <ul>
                <li><img src="logo.png" alt="ECU logo" style="width:75px;height:42px;"></li>
                <li><a class="active" href="/src/html/home.html">Home</a></li>
                <li><a  href="/src/html/games.html" @click="getTable()">Games</a></li>
                <li><a @click="signOut">Sign Out</a></li>
            </ul>
        </div>
      </body>
    </template>
  </authenticator>
</template>
