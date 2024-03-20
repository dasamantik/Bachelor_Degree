import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminP from './components/admin/admin';
import AppB from './components/admin/components/AppBar';
import CPUpage from './components/admin/pages/CPUpage';
import UsersP from './components/admin/pages/UsersP';
import TestP from './components/admin/pages/testP';
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
          <Route exact path="/old" element={<AppB />} />
          <Route exact path="/test" element={<TestP />} />
          <Route exact path="/login" element={<LoginP />} />
          <Route exact path="/register" element={<RegisterP />} />
          <Route exact path="/admin" element={<AdminP />} />
          <Route path="/admin/users" element={<UsersP />} />
          <Route path="/admin/Categories/CPU" element={<CPUpage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
