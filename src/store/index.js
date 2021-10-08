import { createStore , combineReducers } from 'redux';
import Products from '../Components/Products';
import cartReducer from './reducerForCart';

 




const listReducer = ( state={productList: [] , fixedProductList:[]} , action )=>{
    if( action.type=="Kids"){
      console.log("Kids in reducer");
      return {productList: state.fixedProductList.filter( item => item['Category']=="Kids") , fixedProductList:state.fixedProductList};
    }
    if( action.type=="Fashion"){
      console.log(" Fashion");
      return {productList: state.fixedProductList.filter( item => item['Category']=="Fashion"),fixedProductList:state.fixedProductList};
    }
    if( action.type=="Electronics"){
      console.log(" Electronics");
      return {productList: state.fixedProductList.filter( item => item['Category']=="Electronics"),fixedProductList:state.fixedProductList};

    }
    if( action.type=="SET_MESSAGE"){
      console.log("SET");

      return {productList:action.payload , fixedProductList:action.payload}
    }
    return state;
}
const rootReducer = combineReducers({
  listReducer,cartReducer
})
var store=createStore(rootReducer);
 export default store;
