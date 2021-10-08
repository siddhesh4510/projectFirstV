import React, { useState } from "react";
import "./Rating.css";
import { FaStar } from "react-icons/fa";
import Review from "../Review/Review";
import { getDatabase, ref, set, onValue } from "firebase/database";
// import db from "../../fireBase";
import { useParams } from "react-router";
//import app from "../../firebase";
import {newref,storage1,database,auth} from '../firebaseSeller';

function Rating(props) {
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };
  const stars = Array(5).fill(0);
  const [display, setDisplay] = useState(false);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);
  const [reviewDesc, setReviewDesc] = React.useState("");
  const { id } = useParams();
  const name = "UserName";
  var date = new Date();
  date = date.toString();
  date = date.slice(0, 15);

  const reviewId = props.pid+sessionStorage.getItem('uid');

  //store the value of rating-----------
  const handleClick = (value) => {
    setCurrentValue(value);
  };

  //hover effect for rating
  const handleMouseHover = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  //ON CLICK SUBMIT REVIEW----------------------------------------

  const submitForm = (e) => {
    e.preventDefault();
    //insertReview(reviewDesc, props.productId);
  };

  function writeReview() {
    //const db = getDatabase();
    set(newref(database, "Review/" + reviewId), {
      username: name,
      review: reviewDesc,
      rating: currentValue,
      productId: id,
      date: date,
    });
  }

  return (
    <div className="container ">
      <form onSubmit={submitForm}>
        <h2 className="pl-1 pt-4">Rating</h2>
        {/* The review: {reviewDesc} */}
        <div className="stars pb-2 pl-2">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseHover(index + 1)}
                onMouseLeave={handleMouseLeave}
              />
            );
          })}
        </div>
        {/* TEXTAREA FOR REVIEW----------------------------------------------[

] */}
        <div className="p-2">
          <textarea
            // type="text"
            rows="4"
            cols="50"
            placeholder="Write a review for this product"
            value={reviewDesc}
            onChange={(e) => setReviewDesc(e.target.value)}
          />
          <button className="button mb-5" onClick={writeReview}>
            {/* {(e) => setDisplay(true)} */}
            Submit
          </button>
        </div>
      </form>
      
      <Review pid={props.pid}/>
    </div>
  );
}

export default Rating;
