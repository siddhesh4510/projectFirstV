import React from "react";
import Star from "../Product/Star";
// import review from "../../data/review";
import {  onValue } from "firebase/database";
import { useParams } from "react-router";
// import db from "../../fireBase";
import {newref,storage1,database,auth} from '../firebaseSeller';

function Review(props) {
  var reviewData = [];
  const { id } = useParams();

  const starCountRef = newref(database, "Review/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    var reviewArray = Object.values(data);

    reviewData=reviewArray.filter(review => review.productId==props.pid)
    //console.log(reviewData);
  });

  return (
    <div>
      {/* <p>{props.review}</p> */}
      <div className="row text-left">
        <div className="col-md ">
          {reviewData.map((item) => {
            return (
              <div
                className="shadow view overlay zoom card card-bg text-dark mb-3"
                style={{
                  width: "450px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                {/* <img src="" className="card-img-top w-60 h-60" alt="book image" /> */}
                <div className="card-body">
                  <div className="">
                    <h5 className="card-title">{item.username}</h5>
                    <Star rating={item.rating} />
                    <p className="pt-2 text-dark">{item.date}</p>
                    <p className="card-text">{item.review}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Review;
