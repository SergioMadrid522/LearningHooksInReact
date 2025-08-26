import type { items } from "./types/cartTypes";
import "./styles/cart.css";
import { useState } from "react";
import { cartData } from "./data/cartData";

/*
Carrito de compras (mini ejemplo)
- Estado cartCount inicia en 0.
- Cada vez que presionas “Agregar al carrito” aumenta.
- También puedes hacer que “Eliminar” lo reduzca. 
*/

function Modal({ items }: items) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.name}>item.name</li>
        ))}
      </ul>
    </div>
  );
}

function Cart({ items }: items) {
  const [product, setProduct] = useState(0);
  //export const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setProduct(product + 1);
    setActive(!active);
  };

  return (
    <>
      <h2>Cart Simulation</h2>
      <p>products on cart: {product}</p>
      <button type="button">See products on cart</button>
      <div className="items__wrap">
        {items.map((item) => (
          <div key={item.name} className="items__item">
            <h3 key={item.name}>{item.name}</h3>
            <img src={item.img} alt={item.description} />
            <p>{item.description}</p>
            <p>{`${item.price} ${item.price > 0.99 ? "$" : "¢"} `}</p>
            <div className="items__addToCart-container">
              <button
                type="button"
                className={`items__button ${active ? "active" : ""}`}
                onClick={handleClick}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal items={cartData} />
    </>
  );
}
export default Cart;
