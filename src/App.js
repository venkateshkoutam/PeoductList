// App.js or index.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/productList';
import ViewProduct from './components/viewproduct';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ViewProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
