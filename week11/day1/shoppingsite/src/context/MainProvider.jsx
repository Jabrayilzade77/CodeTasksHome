import React, { createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const MainContext = createContext()

function MainProvider({children}) {

const [basket, setBasket] = useLocalStorage("basket",[])

function addBasket(item) {
  
  const index = basket.findIndex(x=>x.id === item.id)
  if (index !== -1) {
    basket[index].count++
    setBasket([...basket])
  }
  else{
    setBasket([...basket,{...item,count:1}])
    
  }

}

function decBasketProduct(item) {

  const index = basket.findIndex(x=>x.id === item.id)
  const element = basket[index]
  if (element.count > 1) {
    basket[index].count--
    setBasket([...basket])
  }
}

function removeProduct(item) {
  setBasket(basket.filter(x=>x.id !== item.id))
}

function getTotal() {
  return basket.reduce((prev,initial)=>prev + (initial.price * initial.count),0)
}


  return (
   <MainContext.Provider value={{basket,addBasket,decBasketProduct,removeProduct,getTotal}}>
    {children}
   </MainContext.Provider>
  )
}

export default MainProvider