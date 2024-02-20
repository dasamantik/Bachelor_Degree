import axios from 'axios';
import { boolean, string } from 'joi';
import authApi from '../api/authApi';
export default class AuthService {
  user = {
    email: string,
    isActivated: boolean,
    id: string,
  };
  isAuth = false;

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }
  async login(email, password) {
    try {
      const response = await authApi.loginApi(email, password);
      localStorage.setItem(`token`, response.data.accessToken);
      console.log(response);
      this.isAuth = true;
      this.user = response.data.user;
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  }
  async register(username, phone, email, password) {
    try {
      console.log(email);
      const response = await authApi.registerApi(username, phone, email, password);
      console.log(response);
      localStorage.setItem(`token`, response.data.accessToken);
      this.isAuth = true;
      this.user = response.data.user;
    } catch (err) {
      console.log(err);
    }
  }

  async logOut() {
    try {
      const response = await authApi.logOutApi();
      console.log(response);
      localStorage.removeItem('token', response.data.accessToken);
      this.setAuth(false);
      this.setUser({ email: string, isActivated: boolean, id: string });
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get('http://localhost:3002/api/refresh', {
        withCredentials: true,
      });
      this.isAuth = true;
      this.user = response.data.user;
      console.log(response);
      localStorage.setItem(`token`, response.data.accessToken);
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  }
}
