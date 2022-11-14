import http from "./http-common"

class UserService {
    login(email, password) {
        return http.get(`/users/sign-in`, { params: { email: email, password: password } });
    }

    register(data) {
        return http.post(`/users/sign-up`, data);
    }

    update(id, data) {
        return http.put(`/users/${ id }`, data);
    }

    delete(id) {
        return http.delete(`/users/${ id }`);
    }
}

export default new UserService;