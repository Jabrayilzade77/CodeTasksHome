import React, { useContext } from 'react'
import { MainContext } from '../context/MainProvider'

function Basket() {

  const { basket, addBasket,decreaseBasket, removeBasket,getTotal } =  useContext(MainContext)

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
    {basket.map((x) => (
      <div key={x.id} style={{ width: "23%", border: "1px solid black",padding:"10px" }}>
        <img src={x.image} alt="" style={{ width: "100%" }} />
        <div>{x.title}</div>
        <div>Price :{x.price} $</div>
        <button>count {x.count}</button>
        <button onClick={() => removeBasket(x)}>remove basket</button>
        <button onClick={()=>addBasket(x)}>+</button>
        <button onClick={()=>decreaseBasket(x)}>-</button>
      </div>
    ))}
  </div>
  <div>Total: {getTotal()}</div>
  </>
  )
}

export default Basket