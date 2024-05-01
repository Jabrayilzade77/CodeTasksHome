import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isDropDown, setIsDropDown] = useState(false)

const hiddenBtnClick = () =>
{
  setIsDropDown(!isDropDown)
}  
  return (
    <>
      <div className="nav_container">
        <div>
          
        </div>
        <Link to={"/"} className="bootstrap">
          <h1>Start Bootstarp</h1>
        </Link>
        <div className="portfolio">
          <Link to={"/"} className="home">
            <p> Home</p>
          </Link>
          <Link to={"about"}>
            <p>About</p>
          </Link>
          <Link to={"samplepost"}>
            <p>SamplePost</p>
          </Link>
          <Link to={"contact"}>
            <p>Contact</p>
          </Link>
         
        </div>
        <div className={`droptownClass ${isDropDown ? "active" : ""}`}>
          <Link to={"/"}><p>Home</p></Link>
          <Link to={"about"}><p>About</p></Link>
          <Link to={"samplepost"}><p>SamplePost</p></Link>
          <Link to={"contact"}><p>Contact</p></Link>
        </div>
        
        <button className="hidden" onClick={hiddenBtnClick}>
          <div>
            Menu <i className="fa-solid fa-bars"></i>
          </div>
        </button>
        
      </div>
    </>
  );
}



export default Navbar;
