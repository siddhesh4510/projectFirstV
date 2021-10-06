
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Products from './Components/Products';
import { Provider } from 'react-redux';
import store from './store/index';
import Header from './Components/Header';
import Home from './Components/Home';
import './FireBase/fireBase'

  

function App() {
  
  return (
    <>

    <Provider store={store}>
    <Header></Header> 
    {/* <Home></Home> */}
    <Router>
       <>
          <Route path="/" exact component={Home}></Route>
          <Route path="/products" component={Products}></Route>

       </>
    </Router>
    </Provider>
   
        
    </>
  );
}

export default App;
