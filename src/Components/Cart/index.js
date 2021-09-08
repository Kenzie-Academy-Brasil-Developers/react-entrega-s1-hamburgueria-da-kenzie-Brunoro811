import Product from "../Product";
import "./style.css";
function Cart({ currentSale, cartTotal, setCartTotal }) {
  if (currentSale[0]) {
    setCartTotal(
      currentSale.reduce((acc, item) => {
        return acc + item.price;
      }, 0)
    );
  }
  return (
    <div className="Cart-Container">
      <div>
        <h3>Cart</h3>
      </div>
      <div>
        <h5>Subtotal: {cartTotal} </h5>
      </div>
      <div className="Cart">
        {currentSale.map((item) => (
          <Product key={item.id} item={item} button={false} />
        ))}
      </div>
    </div>
  );
}
export default Cart;
