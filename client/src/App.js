import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import Catalog from './pages/Catalog/Catalog';
import ShoppingCart from "./pages/Catalog/ShoppingCart"; // Import the ShoppingCart component
import CreateUser from './pages/CreateUser/CreateUser';
import Login from './pages/Login/Login';
import ProductForm from './pages/ProductForm';
import Users from './pages/Users';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Users" element={<Users />} />
          {/* Pass setCart function as a prop to the Catalog component */}
          <Route path="/Catalog" element={<Catalog setCart={setCart} />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/Admin" element={<ProductForm />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} /> {/* Add this route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
