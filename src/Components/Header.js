import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import { Link } from "react-router-dom";
import { useState ,useEffect } from 'react';
import './Header.css'; 
import { useSelector } from 'react-redux';  
import {Link, useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getDatabase, ref, onValue} from "firebase/database";
import {db} from '../FireBase/fireBase';
import {database} from  './firebaseSeller'



const fromDb = (database, dispatch) => {
    
    const starCountRef = ref(database, 'products/');
   onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(Object.values(data));
    dispatch({ type: 'SET_MESSAGE', payload: Object.values(data) })
  
  });
  };


function Header(props) {
  const dispatch=useDispatch();
  

  const history = useHistory();

  var nproducts=useSelector(state=>state.listReducer.fixedProductList)

  const [text , setText ]=useState('');
  const [suggestion , setSuggestion] = useState([]);
  const [userName , setUserName] = useState(sessionStorage.getItem('name'));
  const [productList , setProductList] = useState([]);
  useEffect(()=>{
    fromDb(database,dispatch);
  },[]);
  var len=useSelector(state=>state.cartReducer.cart).length;

  const onChangeHandler=(text)=>{
    let matches=[];
    if(text.length>0){
      matches=nproducts.filter(item=>{
        const regex=new RegExp(`${text}`,"gi");
        return item['productname'].match(regex);
      })
      console.log(matches);
    }
    setText(text);
    setSuggestion(matches.slice(0,Math.min(matches.length,5)));

  }
  return (
    <div className="header">
     
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          style={{width:"100px" , height:"37px"}}

        />


      <div className="header_search">
        <div class="header_searchBar">
        <ul>
          <li>
          <input style={{width:"95%"}} type="text" onChange={e=>onChangeHandler(e.target.value)}  value={text}/>
        <SearchIcon className="header_searchIcon" />
          </li>
            {suggestion.map( item=>{
            console.log(item);
            return <li style={{backgroundColor:"white",cursor:"pointer"}} onClick={()=>{console.log(item['name'])}}>{item['productname']}</li>
          })
            }
          
        </ul>
        </div>

        
      </div>

      <div className="header_navBar">
        <div className="header_menu">
          <span className="header_menuUp">Hello {userName}</span>
          <span className="header_menuDown" onClick={()=>{history.push('/login')}}>Sign In</span>
        </div>

        <div className="header_menu">
          <span className="header_menuUp">Returns</span>
          <span className="header_menuDown">And Orders</span>
        </div>

        <div className="header_menu">
          <span className="header_menuUp">Your</span>
          <span className="header_menuDown">Prime</span>
        </div>
          <Link to="/cart">
          <div className="header_CartIcon" >
            <ShoppingBasketIcon />
            <span className="header_menuDown header_cartItemsCount">{len}</span>
          </div>
          </Link>

      </div>
    </div>
  );
}

export default Header;
