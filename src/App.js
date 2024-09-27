import './components/styles/style.scss'
import React from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="container">
      <div className="block">
        <h1 className="block__title">Product Catalog</h1>
        <AddProduct />
        <ProductList />
      </div>
    </div>

  );
}

export default App;

