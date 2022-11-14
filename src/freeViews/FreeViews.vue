<template>
    <v-app>
      <NavBar v-bind:items="navigationItems" />
  
      <v-main>
        <router-view></router-view>
      </v-main>
  
      <Footer />
    </v-app>  
  </template>
  
  <script>
  import NavBar from "../components/Navbar.vue";
  export default {
    name: "FreeViews",
    data() {
      return {
        navigationItems: [
          { name: "Iniciar sesión", path: "/login", action: () => {} },
          { name: "Registrarse", path: "/register", action: () => {} }
        ]
      }
    },
    components: {
      NavBar,
    }
  }
  </script>
  