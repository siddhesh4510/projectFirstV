import { createStore } from 'redux';
import Products from '../Components/Products';



var products=[
    { 'name':"pTron Tangent Lite Bluetooth 5.0 Wireless Headphones with Hi-Fi Stereo Sound, 8Hrs Playtime",
      'price':"699",
      'image':"https://m.media-amazon.com/images/I/51Bi92jvyDL._SX569_.jpg",
      'stars':"3",
      'category':"Electronics",
    },
    { 'name':"KENT Supreme Extra 2020 (11113), Zero Water Wastage",
      'price':"699",
      'image':"https://m.media-amazon.com/images/I/71jMD6amKoL._SL1500_.jpg", 
      'stars':"4.5",
      'category':"Home",
    },
    { 'name':"My First Book of Pencil Control : Practice Pattern Writing (Full Color Pages)",
      'price':"199",
      'image':"https://images-eu.ssl-images-amazon.com/images/I/51Xcymq23VL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
      'stars':"5",
      'category':"Kids"
    }
    ,
    { 'name':"pTron Tangent Lite Bluetooth 5.0 Wireless Headphones with Hi-Fi Stereo Sound, 8Hrs Playtime",
      'price':"699",
      'image':"https://m.media-amazon.com/images/I/61B0Zf0bjNL._SL1000_.jpg",
      'stars':"3",
      'category':"Electronics"
    },
    { 'name':"Panasonic 2 Tons 5 Star Wi-Fi Inverter Split AC (CS/CU-NU24WKYW, White)",
      'price':"699",
      'image':"https://m.media-amazon.com/images/I/61vern5TkcL._AC_UL480_FMwebp_QL65_.jpg",
      'stars':"3",
      'category':"Home"
    },
    { 'name':"",
      'price':"699",
      'image':"https://m.media-amazon.com/images/I/81ebhR0pu1L._AC_UL480_FMwebp_QL65_.jpg",
      'stars':"2",
      'category':"Fashion"
    },
    { 'name':"pTron Tangent Lite Bluetooth 5.0 Wireless Headphones with Hi-Fi Stereo Sound, 8Hrs Playtime",
      'price':"699",
      'image':"https://m.media-amazon.com/images/I/51Bi92jvyDL._SX569_.jpg",
      'stars':"5",
      'category':"Kids"
    }
  ]

const listReducer = ( state={productList: []} , action )=>{
    if( action.type=="Kids"){
      console.log("Kids in reducer");
      return {productList: state.productList.filter( item => item['category']=="Kids")};
    }
    if( action.type=="Fashion"){
      console.log("Kids in Fashion");
      return {productList: state.productList.filter( item => item['category']=="Fashion")};
    }
    if( action.type=="Electronics"){
      console.log("Kids in Electronics");
      return {productList: state.productList.filter( item => item['category']=="Electronics")};

    }
    if( action.type=="SET_MESSAGE"){
      console.log("SET");
      return {productList:action.payload}
    }
    return state;
}
var store=createStore(listReducer);
 export default store;
