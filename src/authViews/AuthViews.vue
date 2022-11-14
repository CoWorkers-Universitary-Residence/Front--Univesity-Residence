<template>
  <v-app v-if="this.authStore.user">
    <NavBar v-bind:items="navigationItems" />

    <v-main>
      <router-view></router-view>
    </v-main>

    <Footer />
  </v-app>
  <v-app v-else>
    <v-main class="d-flex align-content-center flex-wrap justify-center">
      <h2 class="text-center">Usuario no autenticado</h2>
      <h1 class="text-center">Inicia sesión :)</h1>
      <v-btn class="d-flex mx-auto mt-5 accent--text" width="150px" color="primary" to="/login">Iniciar sesión</v-btn>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "../components/Navbar.vue";
import { useAuthStore } from "@/store/useAuthStore";

export default {
  name: "AuthViews",
  components: {
    NavBar,
  },
  data() {
    return {
      navigationItems: [
        { name: "Home", path: "/auth", action: () => {} },
        { name: "Rooms", path: "/auth/rooms", action: () => {} },
        { name: "Logout", path: "", action: this.logout }
      ],
      authStore: useAuthStore()
    }
  },
  methods: {
    logout() {
      this.authStore.logout();
    }
  }
}
</script>