import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

import { useHistory } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";

function Subtotal() {
  const history = useHistory();
  const dispatch=useDispatch();
  dispatch({type:"GET_TOTAL"});
  var len=useSelector(state=>state.cartReducer.cart).length;

//   const [{ cart }, dispatch] = useStateValue();

  // const makePayment = () => {
  //   dispatch({
  //     type: "MAKE_PAYMENT",
  //   });
  // };

  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({len} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_coupon">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={useSelector((state)=>state.cartReducer.total)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={()=>{history.push("/payment")}}>
        
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;