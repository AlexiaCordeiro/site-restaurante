import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Users from "./pages/Users";
import "./global.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Users" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
