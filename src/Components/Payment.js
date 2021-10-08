import React from "react";
import "./Payment.css";
import CheckOutItem from "./CheckOutItem";
import { Link, useHistory } from "react-router-dom";
import {useSelector} from "react-redux"



function Payment() {
//   const [{ cart, user }, dispatch] = useStateValue();
const cart=useSelector(state=>state.cartReducer.cart);

  const history = useHistory();
  // const postData = () => {
  //   const db = getDatabase();
  //   db.push(ref(db, "buyer-a7b97-default-rtdb/" + 89), {
  //     username: "sd",
  //     age: 453,
  //   });

  // const data = {
  //   title: "Fruit",
  //   name: "Apple",
  // };
  // orderData.push(data);
  // };
  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>
          Checkout (<Link to="/cart">{cart?.length} items</Link>)
        </h1>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3></h3>
          </div>
          <div className="paymentAddress">
            {/* <p></p>
            <p>Specific user's address</p> */}
          </div>
        </div>

        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Reviews and items to be delivered..</h3>
          </div>
          <div className="paymentItems">
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

        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Payment </h3>
          </div>
          <div className="paymentDetails">
            <button
              className="PayButton"
              // onClick={postData}
              onClick={(e) => history.push("/done")}
            >
              Pay Now
            </button>
          </div>
        </div>

        {/* <div className="paymentSection"></div> */}
      </div>
    </div>
  );
}

export default Payment;
