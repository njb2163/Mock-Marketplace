import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import ProductListing from './ProductListing';
import Footer from './Footer';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom';


function App() {
  const productsData = require('./products.json');
  const [shoppingCart, setShoppingCart] = useState([]);

  function handleAddToCart(item, quantity) {
    let newShoppingCart = [...shoppingCart];
    const idx = newShoppingCart.findIndex((e) => e.id === item.id);
    if (idx === -1) {
      let newItem = {
        "id": item.id,
        "name": item.name,
        "quantity": quantity,
        "price": item.price,
        "thumbnail_image": item.thumbnail_image
      };
      newShoppingCart.push(newItem);
    } else {
      newShoppingCart[idx].quantity = newShoppingCart[idx].quantity + quantity;
    };
    setShoppingCart(newShoppingCart);
  };

  function handleRemoveFromCart(item, removeAll=false, quantity=1) {
    let newShoppingCart = [...shoppingCart];
    const idx = newShoppingCart.findIndex((e) => e.id === item.id);
    if (idx !== -1) {
      if(removeAll || newShoppingCart[idx].quantity <= quantity) {
        newShoppingCart = newShoppingCart.slice(0,idx).concat(newShoppingCart.slice(idx+1))
      } else {
        newShoppingCart[idx].quantity = newShoppingCart[idx].quantity - quantity;
      };
    };
    setShoppingCart(newShoppingCart);
  };
  return (
    <Router>
      <Header shoppingCart={shoppingCart} />
      <Routes>
        <Route exact path={"/"} element={<ProductListing
          products={productsData} />} />
        <Route exact path={"/product/:productId"} element={<ProductDetails productsData={productsData} shoppingCart={shoppingCart} handleAddToCart={handleAddToCart} />} />
        <Route exact path={"/cart"} element={<Cart shoppingCart={shoppingCart} handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}></Cart>}></Route>
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
