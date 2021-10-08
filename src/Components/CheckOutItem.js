import React from "react";
import "./CheckOutItem.css";
import Star from './Product/Star';
import {useDispatch} from 'react-redux';
// import { useStateValue } from "../Body/ContextAPI/StateProvider";

function CheckOutItem({ id, image, title, price, rating, hideButton }) {
//   const [{ cart }, dispatch] = useStateValue();
    const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch({
      type: "REMOVED_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutItem">
      <img className="checkoutItemImage" src={image} />
      <div className="checkoutItemInfo">
        <p className="checkoutItemTitle">{title}</p>
        <p className="checkoutItemPrice">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <Star rating={rating}/>
        {/* <div className="checkoutItemRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div> */}

        {!hideButton && (
          <button  onClick={removeItemFromCart}>Remove From Cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckOutItem;