import React from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';

function App() {
  return (
    <div className="app">
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<ProductPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
