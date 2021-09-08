import "./style.css";

function Button({ type, value, param, callback }) {
  return (
    <>
      <button className={"Button " + type} onClick={() => callback(param)}>
        {value}
      </button>
    </>
  );
}
export default Button;
