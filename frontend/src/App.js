import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginP from "./login";
import RegisterP from "./register";

function App() {
  return (
    <div className="App">
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
