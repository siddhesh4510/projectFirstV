import React, { useState } from "react";
import styled from "styled-components";
import Rating from "../Rating/Rating";
import "./Product.css";
import Star from "./Star";

import { useParams } from "react-router";
import ReactImageMagnify from "react-image-magnify";
import { getDatabase, ref, set, onValue } from "firebase/database";
import {newref,storage1,database,auth} from '../firebaseSeller';

import { useDispatch } from "react-redux";


import {useSelector} from "react-redux";

const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

function Product(props) {
  let { id } = useParams();
  const dispatch=useDispatch();
  //console.log({ id });

  var date = new Date();
  date.setDate(date.getDate() + 1);
  date = date.toString();
  date = date.slice(0, 15);

  var reviewData = [];
  var len = 0;
  var avg = 0;
  var sum = 0 
  var count = 0

  const [stockVisible, setStockVisible] = useState(false);
  const [stockValue, setStockValue] = useState(10);

  var inStock = stockValue ? true : false;

  var nproducts=useSelector(state=>state.listReducer.fixedProductList)
  console.log(nproducts);
  console.log(id);
  nproducts=nproducts.filter(product=>product['productId']==id);
  console.log(id,nproducts);
  

  const starCountRef = newref(database, "Review/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    var reviewArray = Object.values(data);
    var reviewData=reviewArray.filter(review => review.productId==id)
    sum=reviewData?.reduce( (amount,review)=>review.rating+amount,0)
    avg=sum/reviewData.length;
    avg=Math.floor(avg);
    //console.log(reviewData);
  });
  // const starCountRef = ref(db, "Review/");
  // onValue(starCountRef, (snapshot) => {
  //   const data = snapshot.val();
  //   var reviewArray = Object.values(data);
  //   len = reviewArray.length;
  //   console.log(len);

  //   for (var i = 0; i < len; i++) {
  //     if (reviewArray[i].productId == id) {
  //       sum += reviewArray[i].rating;
  //       count += 1
  //       }
  //   }
  //   avg = Math.floor(sum/count)

  //   console.log(sum,"avg: ",avg);
  //   len = reviewData.length;
  //   // console.log(typeof sum);
  //   // avg = sum / reviewArray[0].length;
  //   // console.log(avg);
  //   // console.log(Number(sum));
  // });
  var product=nproducts[0]; 
  console.log(product);
  const stockDec = () => {
    if (stockValue > 0) {
      setStockValue(stockValue - 1);
    } else {
      alert("Item Out of Stock");
      setStockValue(0);
    }
    dispatch({type:"ADDED_TO_CART" , item:{
      id: id,
      title:product['productname'] ,
      image:product['imageUrl'] ,
      price: product['price'],
      rating: avg,
    }})

  };

  return (
    <div>
    <div className="container">
      {/* <div>{i}</div> */}
      {/* <Navbar /> */}
      {/* <Announcement /> */}

      <div className="wrapper">
        <div className="imgContainer position-sticky"> 
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "product img",
                isFluidWidth: true,
                src: product['imageUrl'],
                width:500,
                height:500
              },
              largeImage: {
                src: product['imageUrl'],
                width: 1200,
                height: 1800,
              },
              style: {
                marginLeft: "60px",
                marginTop: "20px",
                width: "500px",
                height: "700px",
              },
              hoverDelayInMs: 0,
              // imageClassName: "img",
              imageStyle: {
                objectFit: "contain",
              },
              enlargedImageStyle: {
                opacity: "0px",
              },
              isActivatedOnTouch: true,
              enlargedImagePosition: "over",
            }}
          />
          {/* <img src={product.img} /> */}
        </div>

        <div className="infoContainer ">
          <p className="title">{product['productname']}</p>
          <Star rating={avg} />
          <div className="row pt-1">
            <div className="col-4 ">Total Review: {reviewData.length}</div>
            {/* {rate.review.length} */}
            {/* <div className="col-4 ml-4">Dealer: Delaer</div> */}
          </div>
          <hr />
          <div className="row">
            <p className="price col-1 p-2">Price:</p>
            <p className="price-div  col-4 ">₹{product['price']}</p>
          </div>

          <div className="d-flex delivery-div">
            <p className="free ps-0">FREE delivery: </p>
            <p className="text-dark ps-3 pt-1 fw-bold"> {date}</p>
          </div>

          <div className="">
            {inStock ? (
              <button
                className="text-success stock-button"
                onClick={(e) => setStockVisible(true)}
              >
                In Stock
              </button>
            ) : (
              <div>
                <h4 className="text-danger">Out of Stock</h4>
              </div>
            )}
            {stockVisible ? <p>{stockValue} items available.</p> : null}
          </div>

          <div className="filterContainer">
            <div className="filter">
              <div className="filterTitle">Color</div>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </div>
            <div className="filter ml-1">
              <div className="addContainer">
                {/* <div className="amountContainer">
                  <i class="bi bi-dash-circle"></i>
                  <div className="amount">1</div>
                  <i class="bi bi-psus-circle"></i>
                </div> */}
                <button className="button-cart m-1" onClick={stockDec}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <hr />
          <div className="desc">
            <h4>Product Details</h4>
            {product['description']}
          </div>
          <div className="shadow-sm mt-5">
            <Rating pid={product['productId']} />
          </div>
        </div>
      </div>
      {/* <Newsletter /> */}
      
    </div>
    {/* <Footer /> */}
    </div>
  );
}

export default Product;
