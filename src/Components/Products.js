import React ,{useState , useEffect} from 'react';
import './Products.css';
import CategoryBar from './AppBar';
import ProductCard from './Card';
import img from '../Images/71mYQJEpQFL._SX3000_.jpg';
import { useSelector } from 'react-redux';

export default function Products(){
 
  


    var nproductList=useSelector(state=>state.productList);
   
    return(
        <div >
            {/* <CategoryBar></CategoryBar> */}

            {/* <img src={img} className="home-design" height="400px"></img>      */}
            <div className="row product">
                {
                    nproductList.map( (product )=>{
                        return (
                            <ProductCard name={product['name']} price={product['price']} image={product['image']} stars={product['stars']}></ProductCard>

                        )
                    })
                }
            </div>
        </div>
    )

}