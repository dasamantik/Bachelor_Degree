import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginP from "./components/login-register/login";
import RegisterP from "./components/login-register/register";
import AuthService from "./service/authService";

function App() {
  const authService = new AuthService();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      authService.checkAuth();
    }
  }, []);

  return (
    <div className="App">
      <h1>
        {authService.isAuth
          ? "Користувач зареєстрований"
          : "Відвідайте нашу сторінку"}
      </h1>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginP />} />
          <Route exact path="/register" element={<RegisterP />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
