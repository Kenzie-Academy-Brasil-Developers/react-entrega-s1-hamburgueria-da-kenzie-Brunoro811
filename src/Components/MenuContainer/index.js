import "./style.css";
import Product from "../Product";
import Button from "../Button";
import { useState } from "react";

function MenuContainer({
  products,
  handleClick,
  showProducts,
  filteredProducts,
  setFilteredProducts,
}) {
  const campo = "";
  return (
    <div className="Menu-Carpadio">
      <div>
        <h1>Carpadio</h1>
        <div className="">
          <input
            type="text"
            value={filteredProducts}
            onChange={(e) => setFilteredProducts(e.target.value)}
          />
          <Button
            type={"Button--Seach"}
            value={"Seach"}
            param={setFilteredProducts}
            callback={showProducts}
          />
        </div>
      </div>
      <div>
        <h3>Produtos</h3>
      </div>
      <div className="Menu-Items">
        {products.map((item) => (
          <Product key={item.id} item={item} handleClick={handleClick} button />
        ))}
      </div>
    </div>
  );
}
export default MenuContainer;
