import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import CreateUser from "./pages/CreateUser/CreateUser";
import Users from "./pages/Users";
import Catalog from "./pages/Catalog/Catalog";

import "./global.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Users" element={<Users />}></Route>
          <Route path="/Catalog" element={<Catalog />} ></Route>
          <Route path="/CreateUser" element={<CreateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;