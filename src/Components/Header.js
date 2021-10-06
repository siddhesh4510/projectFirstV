import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import { Link } from "react-router-dom";
import { useState } from 'react';
import './Header.css'; 
import { useSelector } from 'react-redux';  


function Header() {
  var products=useSelector(state=>state.productList);
  const [text , setText ]=useState('');
  const [suggestion , setSuggestion] = useState([]);


  const onChangeHandler=(text)=>{
    let matches=[];
    if(text.length>0){
      matches=products.filter(item=>{
        const regex=new RegExp(`${text}`,"gi");
        return item['name'].match(regex);
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
            return <li style={{backgroundColor:"white",cursor:"pointer"}} onClick={()=>{console.log(item['name'])}}>{item['name']}</li>
          })
            }
          
        </ul>
        </div>

        
      </div>

      <div className="header_navBar">
        <div className="header_menu">
          <span className="header_menuUp">Hello Guest</span>
          <span className="header_menuDown">Sign In</span>
        </div>

        <div className="header_menu">
          <span className="header_menuUp">Returns</span>
          <span className="header_menuDown">And Orders</span>
        </div>

        <div className="header_menu">
          <span className="header_menuUp">Your</span>
          <span className="header_menuDown">Prime</span>
        </div>

          <div className="header_CartIcon">
            <ShoppingBasketIcon />
            <span className="header_menuDown header_cartItemsCount">0</span>
          </div>

      </div>
    </div>
  );
}

export default Header;
