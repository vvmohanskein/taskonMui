import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { PrivateRoutes } from "./validation/PrivateRoutes";
import { Home } from "./components/Home/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          
          <Route element={<PrivateRoutes />}>
            <Route path="dashboard" exact element={<Dashboard />} />
            <Route path="home" exact element={<Home />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
