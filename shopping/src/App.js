import "./App.css";
import { Routes, Route } from "react-router";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/product/:id" element={<PrivateRoute auth={auth} />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
      </Routes>
    </div>
  );
}

export default App;
