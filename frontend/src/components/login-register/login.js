import { Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../service/authService';

function LoginP() {
  const authService = new AuthService();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const isAuthenticated = await authService.login(email, password);
      if (isAuthenticated.role === 'admin' && isAuthenticated.isActivated === true) {
        navigate('/admin');
      } else if (isAuthenticated.role === 'user' && isAuthenticated.isActivated === true) {
        navigate('/');
      } else {
        setShowAlert(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Вхід</h1>
        {showAlert && (
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            Incorrect login or password
          </Alert>
        )}
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
          <button className="button-style" type="button" onClick={handleLogin}>
            Увійти
          </button>
        </form>
        <p className="label-style">
          Не маєте акаунту?{' '}
          <a className="link-style" href="/register">
            Зареєструвати
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginP;
