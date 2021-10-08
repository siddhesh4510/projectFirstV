import Header from './Header';
import React from 'react';
import Category from './Categories';
import img from '../Images/71mYQJEpQFL._SX3000_.jpg';
import './Products.css';

  




export default function Home(props) {
    
    var categories=[ {'name':'Electronics' ,
                       'image':'https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Jupiter/GW/P1/D28587006_IN_CEPC_Electronics_GW_graphics_Jupiter_P1_rush_758X6081x_1._SY304_CB639926897_.jpg'
                    },
                    {
                        'name':'Kids' ,
                        'image':'https://m.media-amazon.com/images/I/91+01TsSnQL._AC_SY200_.jpg'
                    },
                    {
                        'name':'Fashion',
                        'image':'https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Jupiter_21/Desktop_CatNav/English/image8._CB640795444_.png'
                    },
                    {
                        'name':'Home',
                        'image':'https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/Desktop-1x/HK-English._CB640942062_.jpg'
                    }
                ]
    var clickOnCard=()=>{
        console.log("ClickOnCards");
        props.history.push('/products');
    }

    return (
        <>
        
        <img src={img} className="home-design" height="400px" ></img>
       
        <div class="row product">
            {   
                categories.map( (category)=>{
                    return (
                    
                    <Category name={category['name']} image={category['image']} clickFunction={clickOnCard} ></Category>
                    
                    )
                } )
            }
        </div>
       
        </>
        

    )
}