import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import CreateUser from "./pages/CreateUser/CreateUser";
import Login from "./pages/Login/Login";
import ProductForm from "./pages/ProductForm"; // Import the ProductForm component
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Users" element={<Users />}></Route>
          <Route path="/CreateUser" element={<CreateUser />}></Route>
          <Route path="/Admin" element={<ProductForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
