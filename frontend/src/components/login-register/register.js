import React, { useState } from "react";
import { register } from "../../service/authService";
import "./login-register.css";

function RegisterP() {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="App">
      <div className="container">
        <h1>Реєстрація</h1>
        <form className="form-container">
          <label className="label-style" htmlFor="username">
            Ім'я користувача:
          </label>
          <input
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            className="input-style"
            type="text"
            id="username"
            name="username"
          />
          <label className="label-style" htmlFor="username">
            Номер телефону:
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input-style"
            type="text"
            id="username"
            name="username"
          />
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
            type="submit"
            onClick={() => register(name, phone, email, password)}
          >
            Створити акаунту
          </button>
        </form>
        <p className="label-style">
          Вже маєте акаунт?{" "}
          <a className="link-style" href="/login">
            Увійти
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterP;
