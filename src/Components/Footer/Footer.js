import React from 'react'
import logo from './amazon_logo_white.png'

function Footer() {
    return (
        <div>
        {/* 1 */}
            
    <div className="container-fluid bg-dark px-0">
            {/* 2 */}
    <a href="#" className="btn btn-dark btn-block mb-5 ">Back to Top 
    <i class="bi bi-arrow-up-circle pl-2"></i>
    </a>
    
    <div className="container">
    {/* 3 */}
      <div className="row text-white w-100 mb-5">
        {/* 4 */}
        <div className="col-3">
          <h5>Get to know us</h5>
          <a href="#" className="text-white">About</a> <br />
          <a href="#" className="text-white">Careers</a> <br />
          <a href="#" className="text-white">Press Release</a> <br />
          <a href="#" className="text-white">Investment</a> <br />
          <a href="#" className="text-white">Offers</a> <br />
        </div>
        {/* end 4 */}
        <div className="col-3">
        {/* 5 */}
          <h5>Connect With Us</h5>
          <a href="#" className="text-white">Facebook</a> <br />
          <a href="#" className="text-white">Twitter</a> <br />
          <a href="#" className="text-white">Instagram</a> <br />
        </div>
        {/* end 5 */}
        <div className="col-3">
        {/* 6 */}
          <h5>Make Money With Us</h5>
          <a href="#" className="text-white">Sell on Amazon</a> <br />
          <a href="#" className="text-white">Affiliate Marketing</a> <br />
          <a href="#" className="text-white">Fullfilment Center</a> <br />
          <a href="#" className="text-white">Advertise Your Product</a> <br />
          <a href="#" className="text-white">Amazon Pay</a> <br />
        </div>
        {/* end 6 */}

        <div className="col-3">
        {/* 7 */}
          <h5>Let Us Help You</h5>
          <a href="#" className="text-white">COVID 19</a> <br />
          <a href="#" className="text-white">Your Account</a> <br />
          <a href="#" className="text-white">Returns</a> <br />
          <a href="#" className="text-white">Funding</a> <br />
          <a href="#" className="text-white">Help</a> <br />
        </div>
        {/* end 7 */}

      </div>
    </div>

    <div className="dropdown-divider mt-3"></div>

    <div className="row mt-3 mx-0 px-0">
      <div className="col-md-12 text-center">
        <img src={logo} style={{height:"30px", width:"100px" }}alt="amazon logo white footer"/>
      </div>
    </div>


    {/* <!-- Sub footer starts --> */}
    <div className="py-3 mt-3 shadow-lg" style={{backgroundColor: "#131a22", fontSize: "12px"}}> 
      <div className="container w-100">

        <div className="row w-100 text-white">

          <div className="col-md-3">
            <p>Get to know us</p>
            <a href="#" className="text-white">About</a> <br />
            <a href="#" className="text-white">Careers</a> <br />
            <a href="#" className="text-white">Press Release</a> <br />
            <a href="#" className="text-white">Investment</a> <br />
            <a href="#" className="text-white">Offers</a> <br />
          </div>
  
          <div className="col-md-3">
            <p>Connect With Us</p>
            <a href="#" className="text-white">Facebook</a> <br />
            <a href="#" className="text-white">Twitter</a> <br />
            <a href="#" className="text-white">Instagram</a> <br />
          </div>
  
          <div className="col-md-3">
            <p>Make Money With Us</p>
            <a href="#" className="text-white">Sell on Amazon</a> <br />
            <a href="#" className="text-white">Affiliate Marketing</a> <br />
            <a href="#" className="text-white">Fullfilment Center</a> <br />
            <a href="#" className="text-white">Advertise Your Product</a> <br />
            <a href="#" className="text-white">Amazon Pay</a> <br />
          </div>
  
          <div className="col-md-3">
            <p>Let Us Help You</p>
            <a href="#" className="text-white">COVID 19</a> <br />
            <a href="#" className="text-white">Your Account</a> <br />
            <a href="#" className="text-white">Returns</a> <br />
            <a href="#" className="text-white">Funding</a> <br />
            <a href="#" className="text-white">Help</a> <br />
          </div>
  
        </div>


        <div className="row my-5">
          <div className="col-md-12 text-center text-white">
            <p>
              {/* <i className="far fa-copyright"></i>  */}
              © 1996-2021, Amazon.com Inc.
            </p>
          </div>
        </div>

      </div>
    </div> 
        </div>
        </div>
    )
}

export default Footer
