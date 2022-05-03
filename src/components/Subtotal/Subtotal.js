import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../../Stateprovider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  let sum = 0;
  for (let i = 0; i < basket.length; i++) {
    sum += basket[i].price;
  }
  sum = Math.round(sum * 100) / 100;
  // console.log(sum);
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket?.length}): <strong>${`${sum}`}</strong>
      </p>
      <div>
        <input type="checkbox" />
        &nbsp;
        <label>This order contains a gift</label>
      </div>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
