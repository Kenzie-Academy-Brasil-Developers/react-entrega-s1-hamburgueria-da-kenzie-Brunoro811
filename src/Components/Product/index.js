import Button from "../Button";
import "./style.css";
function Product({ item: { id, name, category, price }, handleClick, button }) {
  return (
    <div className="Product">
      <ul className="List-Product">
        <li key={name}>{name}</li>
        <li key={id}>{category}</li>
        <li key={price}>{price}</li>
        {button && (
          <li key={`${id}button`}>
            <Button
              type={"Button--Add"}
              id={id}
              value={"Adiciona"}
              callback={() => handleClick(id)}
            />
          </li>
        )}
      </ul>
    </div>
  );
}
export default Product;
