import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PermanentDrawerLeft from './components/admin/admin';
import LoginP from './components/login-register/login';
import RegisterP from './components/login-register/register';
import AuthService from './service/authService';
function App() {
  const authService = new AuthService();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      authService.checkAuth();
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginP />} />
          <Route exact path="/register" element={<RegisterP />} />
          <Route exact path="/admin" element={<PermanentDrawerLeft />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
