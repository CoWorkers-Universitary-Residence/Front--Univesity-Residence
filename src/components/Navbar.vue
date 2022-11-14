<template>
    <v-app-bar app color="accent">
      <v-app-bar-title class="text-h5 white--text ">
        University Residence
      </v-app-bar-title>
  
      <v-spacer></v-spacer>
  
      <v-btn
          v-for="item in items"
          :key="item.name"
          :to="item.path"
          @click="item.action"
          exact
          class="primary--text d-none d-sm-flex"
          text
      >
        {{ item.name }}
      </v-btn>
  
      <v-app-bar-nav-icon
          class="accent primary--text d-flex d-sm-none"
          @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
  
      <v-navigation-drawer
          v-model="drawer"
          app
          absolute
          temporary
          right
          color="accent"
      >
        <v-list
            v-for="item in items"
            :key="item.name"
            nav
            dense
        >
          <v-btn
              :to="item.path"
              @click="item.action"
              exact
              class="primary--text"
              text
          >
            {{ item.name }}
          </v-btn>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: "NavBar",
    props: {
      items: Array
    },
    data() {
      return {
        drawer: false,
        group: null,
      }
    },
    watch: {
      group() {
        this.drawer = false;
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>