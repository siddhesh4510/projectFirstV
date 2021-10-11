import React ,{useState , useEffect} from 'react';
import './Products.css';
import CategoryBar from './AppBar';
import SellerProductCard from './SellerProductCard';
import img from '../Images/71mYQJEpQFL._SX3000_.jpg';
import { useSelector } from 'react-redux';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

import {newref ,database  } from './firebaseSeller';
import { getDatabase, ref, onValue} from "firebase/database";
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './firebaseSeller';
import {useHistory} from 'react-router-dom';






const useStyles = makeStyles({
    button: {
        margin:10,
        backgroundColor:'orange'
    },
      leftIcon: {
        marginRight: 10,
      },
      rightIcon: {
        marginLeft: 10,
      },
  });
  


export default function Products(){
    const history=useHistory();
 
    const classes = useStyles();
    const [currentUser , setCurrentUser]=useState('');
    
    var nproductList=useSelector(state=>state.listReducer.fixedProductList);
    //setProductList(nproductList.filter(item=>item['userId']=="qmHiTDwR8uaMuhyk074QmceTK502"));
    const [productList , setProductList]=useState(nproductList.filter(item=>item['userId']==sessionStorage.getItem('uid')));
    console.log(productList);
    const fetchChanges=()=>{
        setProductList(nproductList.filter(item=>item['userId']==sessionStorage.getItem('uid')));
        
    }
    

        // onAuthStateChanged(auth,(user)=>{
        //     if(user)
        //     {
        //       setCurrentUser(user);
        //      console.log(user.uid);

        //      //setProductList(nproductList.filter(item=>item['userId']==currentUser.uid));
              
        //     }
        //     else{
              
        //       setCurrentUser(null)
        //      alert("please Login first")
        //      history.push('/LoginSeller')
        //     }
        //      })

        // const starCountRef = newref(database, 'products/');
        // onValue(starCountRef, (snapshot) => {
        //  const data = snapshot.val();
        //  console.log(Object.values(data));
        //  setProductList(Object.values(data).filter(item=>item['userId']==currentUser.uid));
        //  console.log(productList);

       
    //    });
      



   
    return(
        <div >
            {/* <CategoryBar></CategoryBar> */}
            {/* <NavTabs></NavTabs>
            <Button variant="contained" color="default" className={classes.button}>
                Upload
                <CloudUploadIcon className={classes.rightIcon} />
            </Button> */}
            

            {/* <img src={img} className="home-design" height="400px"></img>      */}
            <div className="row product ">
            <div className="col-12 ">
                {
                    productList.map( (product )=>{
                        return (
                            <SellerProductCard name={product['productname']} 
                                    price={product['price']} 
                                    image={product['imageUrl']}
                                    stars={product['stars']}
                                    description={product['description']}
                                    productId={product['productId']}
                                    fetchChanges={fetchChanges}>
                            </SellerProductCard>

                        )
                    })
                }
            </div>
            </div>
        </div>
    )

}