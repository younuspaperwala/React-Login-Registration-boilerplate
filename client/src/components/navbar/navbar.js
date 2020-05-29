import React, { Component } from 'react';
import jQuery from 'jquery'
window.jQuery = jQuery;



class NavbarTop extends Component {
    render() {
        return (
            <header id="header" >
            <div className="container">

              <div id="logo" className="pull-left">
                <a href="index.html"><img src={require("../../assets/img/logo.png")} alt="" /></a>
                {/* <!-- Uncomment below if you prefer to use a text image --> */}
                {/* <!--<h1><a href="index.html">Header 1</a></h1>--> */}
              </div>

              <nav id="nav-menu-container">
                <ul className="nav-menu ">
                  <li className=""><a href="index.html">Home</a></li>
                  <li className="menu-active"><a href="#about">About Us</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#team">Team</a></li>
                  <li className="menu-has-children"><a href="" className="sf-with-ul">Drop Down</a>
                    <ul style={{display: "none"}}>
                      <li><a href="#">Drop Down 1</a></li>
                      <li className="menu-has-children"><a href="#" className="sf-with-ul">Drop Down 2</a>
                        <ul style={{display: "none"}}>
                          <li><a href="#">Deep Drop Down 1</a></li>
                          <li><a href="#">Deep Drop Down 2</a></li>
                          <li><a href="#">Deep Drop Down 3</a></li>
                          <li><a href="#">Deep Drop Down 4</a></li>
                          <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Drop Down 3</a></li>
                      <li><a href="#">Drop Down 4</a></li>
                      <li><a href="#">Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </nav>
              {/* <!-- #nav-menu-container --> */}
            </div>
          </header>
          
        );
    }
}

export default NavbarTop;