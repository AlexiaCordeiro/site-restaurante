import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import Catalog from './pages/Catalog/Catalog';
import ShoppingCart from "./pages/Catalog/ShoppingCart"; // Import the ShoppingCart component
import CreateUser from './pages/CreateUser/CreateUser';
import Login from './pages/Login/Login';
import ProductForm from './pages/ProductForm';
import Users from './pages/Users';
<<<<<<< HEAD
import Rating from './pages/Rating';
=======
>>>>>>> 76d43e09db97f868e23ec43c3a8c8c79c7bbbe33

function App() {
  const [cart, setCart] = useState([]);

<<<<<<< HEAD
  const handleRating = (value) => {
    console.log(`O cliente avaliou com ${value}`);
    // Aqui você pode fazer o que quiser com a avaliação, como enviar para um servidor, armazenar no estado, etc.
  };

=======
>>>>>>> 76d43e09db97f868e23ec43c3a8c8c79c7bbbe33
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
<<<<<<< HEAD
          <Route path="/Rating" element={<Rating/>}></Route>
=======
>>>>>>> 76d43e09db97f868e23ec43c3a8c8c79c7bbbe33
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
