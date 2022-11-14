<template>
  <v-container>
    <v-form
        ref="form"
        v-model="form.isValid"
        class="col-12 col-sm-8 col-md-5 mx-auto flex"
    >
      <div class="icon mx-auto mb-5 img-container">
        <img alt="University Residence" src="../assets/ur-logo.jpeg">
      </div>

      <h2 class="text-center mb-10">Iniciar sesión</h2>

      <v-text-field
          v-model="form.email"
          label="Correo electrónico"
          color="accent"
          outlined
          :rules="[rules.required, rules.email]"
      ></v-text-field>

      <v-text-field
          v-model="form.password"
          label="Contraseña"
          color="accent"
          outlined
          @click:append="form.showPassword = !form.showPassword"
          :append-icon="form.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="form.showPassword ? 'text' : 'password'"
          :rules="[rules.required]"
      ></v-text-field>

      <v-btn
          v-if="!authStore.loading"
          color="secondary"
          class="py-5 mb-5"
          block
          :disabled="!form.isValid"
          @click="onSubmit()"
      >
        Iniciar sesión
      </v-btn>
      <div
          v-else
          class="flex d-flex"
      >
        <v-progress-circular
            indeterminate
            color="primary"
            class="mx-auto mb-5"
        ></v-progress-circular>
      </div>

      <p class="text-center">
        ¿No tienes cuenta?
        <v-btn
            text
            class="blue--text"
            to="/register"
        >
          Registrate
        </v-btn>
      </p>
    </v-form>

    <v-snackbar
        v-model="authStore.error"
        :timeout="timeout"
        color="red accent-2"
    >
      {{ "Error: correo y/o contraseña invalidos" }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="accent"
            text
            v-bind="attrs"
            @click="authStore.error = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { useAuthStore } from "../store/useAuthStore";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
        isValid: false,
        showPassword: false
      },
      rules: {
        required: v => !!v || 'Requerido',
        email: v => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'Correo inválido.'
        }
      },
      timeout: 3000,
      authStore: useAuthStore()
    }
  },
  methods: {
    async onSubmit() {
      await this.authStore.login(this.form.email, this.form.password);
    },
    initForm() {
      this.form = { email: "", password: "", isValid: false, showPassword: false };
    }
  },
  mounted() {
    this.initForm();
  }
}
</script>

<style scoped>
.icon {
  width: 100px;
  height: 100px;
  background: #A5EBE9;
  border-radius: 50%;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 70px;
  margin: auto;
  display: block;
}
</style>