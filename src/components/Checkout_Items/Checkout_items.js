import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../../Stateprovider";
import "./Checkout_items.css";

function Checkout_items(props) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(props.el.id);
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.el.id,
    });
  };

  return (
    <div className="checkout_items">
      <img src={props.el.image} className="imge" />
      <div className="right">
        <p>{props.el.title}</p>
        <strong>$ {props.el.price}</strong>
        <div className="product__rating">
          {Array(props.el.rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="star" />
            ))}
        </div>
        <button className="btn_rem" onClick={removeFromBasket}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Checkout_items;
