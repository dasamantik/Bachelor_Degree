import React, { useState } from "react";
import AuthService from "../../service/authService";
import "./login-register.css";
function LoginP() {
  const authService = new AuthService();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <div className="container">
        <h1>Вхід</h1>
        <form className="form-container">
          <label className="label-style" htmlFor="username">
            Електронна адреса:
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-style"
            type="text"
            id="username"
            name="username"
          />
          <label className="label-style" htmlFor="password">
            Пароль:
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-style"
            type="password"
            id="password"
            name="password"
          />
          <button
            className="button-style"
            type="button"
            onClick={() => authService.login(email, password)}
          >
            Увійти
          </button>
        </form>
        <p className="label-style">
          Не маєте акаунту?{" "}
          <a className="link-style" href="/register">
            Зареєструвати
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginP;
