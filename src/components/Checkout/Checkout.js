import { SportsBasketball } from "@material-ui/icons";
import React from "react";
import Checkout_items from "../Checkout_Items/Checkout_items";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import { useStateValue } from "../../Stateprovider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  return (
    <>
      <img
        src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
        alt="banner"
      />
      <div className="checkout">
        <div className="checkout__left">
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
          </div>
          {basket.map((el) => (
            <Checkout_items el={el} />
          ))}
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
