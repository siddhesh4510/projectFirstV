import React ,{useState , useEffect} from 'react';
import './Products.css';
import CategoryBar from './AppBar';
import ProductCard from './Card';
import img from '../Images/71mYQJEpQFL._SX3000_.jpg';
import { useSelector } from 'react-redux';

export default function Products(){
 
  
   useSelector(state=>{console.log(state)});

    var nproductList=useSelector(state=>state.listReducer.productList);
   
    return(
        <div >
            {/* <CategoryBar></CategoryBar> */}

            {/* <img src={img} className="home-design" height="400px"></img>      */}
            <div className="row product">
                {
                    nproductList.map( (product , key)=>{
                        return (
                            <ProductCard name={product['productname']} price={product['price']} image={product['imageUrl']} stars={product['stars']} index={product['productId']}></ProductCard>

                        )
                    })
                }
            </div>
        </div>
    )

}