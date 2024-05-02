import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { MainContext } from "../context/MainProvider";
import { WishListContext } from "../context/WishlistProvider";

function HomePage() {
  const [prodcuts, setProdcuts] = useState([]);
  const {  addBasket,decreaseBasket, removeBasket,isExistBasket,getCountFromBasket } = useContext(MainContext);
  const {  addwishlist,isExistwishlist } = useContext(WishListContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProdcuts(data));
  }, []);

  return (
    <div>
      <h1>HomePage</h1>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {prodcuts.map((x) => (
          <div key={x.id} style={{ width: "23%", border: "1px solid black" }}>
              <div onClick={()=>addwishlist(x)}> {isExistwishlist(x) ? <i className="fa-solid fa-heart"></i>:   <i className="fa-regular fa-heart"></i>}
</div>

          
            <img src={x.image} alt="" style={{ width: "100%" }} />
            <div>{x.title}</div>
            <div>Price :{x.price} $</div>

            {isExistBasket(x) ? (
              <>
              <button>{getCountFromBasket(x)}</button>
                <button onClick={() => removeBasket(x)}>remove basket</button>
                <button onClick={() => addBasket(x)}>+</button>
                <button onClick={() => decreaseBasket(x)}>-</button>
              </>
            ) : (
             <>
              <button onClick={() => addBasket(x)}>add basket</button>
             </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
