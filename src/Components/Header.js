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
    dispatch({ type: 'SET_MESSAGE', payload: Object.values(data) });
  
  });
  };
  


function Header(props) {
  const dispatch=useDispatch();
  console.log(sessionStorage.getItem('uid'));

  const history = useHistory();

  var nproducts=useSelector(state=>state.listReducer.fixedProductList);
  console.log(nproducts);

  const [text , setText ]=useState('');
  const [suggestion , setSuggestion] = useState([]);
  const [userName , setUserName] = useState('');
  const [productList , setProductList] = useState([]);
  var uname=sessionStorage.getItem('name');
  useEffect(()=>{
    fromDb(database,dispatch);
    setUserName(uname);
  },[]);
  var len=useSelector(state=>state.cartReducer.cart).length;
  var isLogedIn=useSelector(state=>state.cartReducer.isLogedIn);
  var user=useSelector(state=>state.cartReducer.user);
  var userNameStore=useSelector(state=>state.cartReducer.displayName);
  useSelector(state=>{console.log(state)});
  console.log(isLogedIn);

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

  const signOut=()=>{
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('uid');
    setUserName('');
    dispatch({type:'LOGOUT_DONE'});
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
          <input style={{width:"95%"}}
           type="text"
            onChange={e=>onChangeHandler(e.target.value)}  
            value={text}
            // onBlur={()=>{
            //   setTimeout(()=>{
            //     setSuggestion([]);
            //   },100)
            // }}
            />
        <SearchIcon className="header_searchIcon" />
          </li>
            {suggestion.map( item=>{
            console.log(item);
            return <Link to={`/product/${item['productId']}`} style={{ textDecoration: 'none' }}>
              <li style={{backgroundColor:"white",cursor:"pointer"}} className="suggestion" 
              onClick={()=>{console.log(item);  
              setSuggestion([]);setText(item['productname'])}}>{item['productname']}
              </li></Link>
          })
            }
          
        </ul>
        </div>

        
      </div>

      <div className="header_navBar">
        <div className="header_menu">
          <span className="header_menuUp">Hello {userName}</span>
          {!isLogedIn && <span className="header_menuDown" onClick={()=>{history.push('/login')}}>Sign In</span>}
          {isLogedIn && <span className="header_menuDown" onClick={signOut}>Sign Out</span>}
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
