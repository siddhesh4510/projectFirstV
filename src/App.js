
import './App.css';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Products from './Components/Products';
import { Provider } from 'react-redux';
import store from './store/index';
import Header from './Components/Header';
import Home from './Components/Home';
import './FireBase/fireBase';
import Login from './Components/Buyer/Login/Login';
import Signup from './Components/Buyer/Login/Signup';
import Seller from './Components/SellerOption';
import SellerSignUp from './Components/Seller/SignupSeller';
import SellerLogin from './Components/Seller/LoginSeller';
import ProductDes from './Components/Product/Product';
import CheckOut from './Components/checkOut';
import Payment from "./Components/Payment";
import Done from './Components/FinallyDone'

  

function App() {
  
  return (
    <>

    <Provider store={store}>
      <Router>
          <Switch >
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/signup">
                <Signup/>
              </Route>
              <Route path="/LoginSeller">
                    <SellerLogin></SellerLogin>
              </Route>
              <Route path="/SignupSeller">
                    <SellerSignUp/>
              </Route>
                       <Route path="/cart">
                         <Header />
                              <CheckOut/>
                        </Route>
              <Route path="/payment">
                <Header/>
                  <Payment/>

                </Route>

                <Route path="/done">
                <Header/>
                  <Done/>

                </Route>


              <Route path="/">
                    <Header></Header> 
                  {/* <Home></Home> */}
                  <Router>
                    <>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/products" component={Products}></Route>
                        <Route path="/seller">
                              <Seller/>
                        </Route>

                        <Route path="/product/:id">
                              <ProductDes/>
                        </Route>



                    </>
                  </Router>
              </Route>


          </Switch>

            
      </Router>
    </Provider>
   
        
    </>
  );
}

export default App;
