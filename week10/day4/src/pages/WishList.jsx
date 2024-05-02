import React, { useContext } from 'react'
import { MainContext } from '../context/MainProvider'
import { WishListContext } from '../context/WishlistProvider'

function Wishlist() {

  const { wishlist,  addwishlist,isExistwishlist} =  useContext(WishListContext)

  return (
    <>
    <div
    style={{
      border: "1px solid black",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    }}
  >
    {wishlist.map((x) => (
      <div key={x.id} style={{ width: "23%", border: "1px solid black",padding:"10px" }}>
        <div onClick={()=>addwishlist(x)}> {isExistwishlist(x) ? <i className="fa-solid fa-heart"></i>:   <i className="fa-regular fa-heart"></i>}
</div>
        <img src={x.image} alt="" style={{ width: "100%" }} />
        <div>{x.title}</div>
        <div>Price :{x.price} $</div>
   
      </div>
    ))}
  </div>
  </>
  )
}

export default Wishlist