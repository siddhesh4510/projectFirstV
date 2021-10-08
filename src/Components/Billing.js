import React from "react";
import "./Billing.css";
import CurrencyFormat from "react-currency-format";
import {useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import Ordered from "./Ordered";

function Subtotal() {
  const history = useHistory();
    const cart =useSelector(state=>state.cartReducer.cart);

  // const makePayment = () => {
  //   dispatch({
  //     type: "MAKE_PAYMENT",
  //   });
  // };

  return (
    <div className="billing">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3>
              Total Amount : <strong>{value}</strong>
            </h3>
            <h3>Number of Items : ({cart.length})</h3>
          </>
        )}
        decimalScale={2}
        value={useSelector((state)=>state.cartReducer.total)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <Ordered />
    </div>
  );
}

export default Subtotal;