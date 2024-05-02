import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/MainProvider";

function Navbar() {
  const { basket } = useContext(MainContext);
  return (
    <nav style={{ padding: "10px 5px", backgroundColor: "black" }}>
      <button>
        <Link to={"/"} style={{ padding: "5px" }}>
          HomePage
        </Link>
        <Link to={"basket"} style={{ padding: "5px" }}>Basket {basket.length}</Link>
        <Link to={"wishlist"}>Wishlist</Link>
        
      </button>
    </nav>
  );
}

export default Navbar;
