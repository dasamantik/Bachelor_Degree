import "./login-register.css";

function LoginP() {
  return (
    <div className="App">
      <div className="container">
        <h1>Вхід</h1>
        <form className="form-container">
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
          <button className="button-style" type="submit">
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
