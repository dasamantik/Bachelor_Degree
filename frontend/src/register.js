import "./login-register.css";

function RegisterP() {
  return (
    <div className="App">
      <div className="container">
        <h1>Реєстрація</h1>
        <form className="form-container">
          <label className="label-style" htmlFor="username">
            Ім'я користувача:
          </label>
          <input
            className="input-style"
            type="text"
            id="username"
            name="username"
          />
          <label className="label-style" htmlFor="username">
            Номер телефону:
          </label>
          <input
            className="input-style"
            type="text"
            id="username"
            name="username"
          />
          <label className="label-style" htmlFor="username">
            Електронна адреса:
          </label>
          <input
            className="input-style"
            type="text"
            id="username"
            name="username"
          />
          <label className="label-style" htmlFor="password">
            Пароль:
          </label>
          <input
            className="input-style"
            type="password"
            id="password"
            name="password"
          />
          <label className="label-style" htmlFor="username">
            Повторити пароль:
          </label>
          <input
            className="input-style"
            type="text"
            id="username"
            name="username"
          />
          <button className="button-style" type="submit">
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
