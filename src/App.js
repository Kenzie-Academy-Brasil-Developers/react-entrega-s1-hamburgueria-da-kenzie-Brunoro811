import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart";

import MenuContainer from "./Components/MenuContainer";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = (campo) => {
    setFilteredProducts(campo);
    setProducts(products.filter((item) => item.name === filteredProducts));
  };

  const handleClick = (productId) => {
    if (currentSale.filter((item) => item.id == productId) == "") {
      const productSelect = products.filter((item) => {
        return item.id == productId;
      });
      setCurrentSale([...currentSale, ...productSelect]);
    }
  };

  return (
    <div className="App App-header">
      <MenuContainer
        products={products}
        handleClick={handleClick}
        showProducts={showProducts}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <Cart
        currentSale={currentSale}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      />
    </div>
  );
}

export default App;
