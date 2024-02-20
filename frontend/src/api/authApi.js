import $api from '../http';

export default class authApi {
  static async loginApi(email, password) {
    return $api.post('/login', { email, password });
  }

  static async registerApi(name, phone, email, password) {
    return $api.post('/register', { name, phone, email, password });
  }
  static async logOutApi() {
    return $api.post('/logOut');
  }
}
