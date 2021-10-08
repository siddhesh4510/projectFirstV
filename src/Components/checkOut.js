import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
// import { useStateValue } from "../Body/ContextAPI/StateProvider";
import CheckOutItem from "./CheckOutItem";
import {useSelector} from 'react-redux';


function Checkout() {
  var cart=useSelector(state=>state.cartReducer.cart);
  console.log(cart);

  return (
    <div className="checkout">
      <div className="checkout_leftPortion">
        <img
          className="checkout_ads"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg"
          alt=""
        />

        <div>
          {/* <h3>
            This area will fetch the username from firebase database (Login
            Auth)..
          </h3> */}
          <h3 className="checkout_cartTitle">Item(s) added to Cart ...</h3>
          {cart.map((item) => (
            <CheckOutItem
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_rightPortion">
        <Subtotal />

      </div>
    </div>
  );
}

export default Checkout;