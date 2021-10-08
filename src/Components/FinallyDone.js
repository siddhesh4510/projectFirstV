import React from "react";
import { useSelector} from "react-redux";
import "./FinallyDone.css";
import CheckOutItem from "./CheckOutItem";
import Billing from "./Billing";

function FinallyDone() {
const cart=useSelector(state=>state.cartReducer.cart);

  return (
    <div>
      <div className="orders">
        <h2 className="orderHeading">Your orders :</h2>
      </div>
      <div className="ordersCompleted">
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
      <Billing />
    </div>
  );
}

export default FinallyDone;
