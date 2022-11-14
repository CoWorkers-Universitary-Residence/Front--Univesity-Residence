import { defineStore } from "pinia";
import UserService from "@/services/user-service";
import router from "@/router";

const USER = "user";

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        user: JSON.parse(localStorage.getItem(USER)),
        loading: false,
        error: false
    }),
    actions: {
        async login(email, password) {
            this.loading = true;
            this.error = false
            await UserService.login(email, password)
                .then(response => {
                    this.user = response.data;
                    localStorage.setItem(USER, JSON.stringify(response.data))
                    router.push("/auth");
                })
                .catch(e => {
                    console.log(e);
                    this.error = true
                });
            this.loading = false;
        },
        logout() {
            this.user = null;
            localStorage.clear();
            router.push("/");
        },
        async updateCurrentUser() {
            this.loading = true;
            this.error = false

            const { id, name, lastName, email } = this.user;
            await UserService.update(id,{ name, lastName, email })
                .then(response => {
                    this.user = response.data
                    localStorage.setItem(USER, JSON.stringify(response.data))
                })
                .catch(e => {
                    console.log(e);
                    this.error = true
                });
            this.loading = false;
        },
        async register(user) {
            this.loading = true;
            this.error = false
            await UserService.register(user)
                .then(response => {
                    this.user = response.data;
                    localStorage.setItem(USER, JSON.stringify(response.data))
                    router.push("/auth");
                })
                .catch(e => {
                    console.log(e);
                    this.error = true
                });
            this.loading = false;
        },
        async update(id, user) {
            this.loading = true;
            this.error = false
            await UserService.update(id, user)
                .then(response => {
                    this.user = response.data
                    localStorage.setItem(USER, JSON.stringify(response.data))
                })
                .catch(e => {
                    console.log(e);
                    this.error = true
                });
            this.loading = false;
        }
    }
});