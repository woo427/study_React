import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
