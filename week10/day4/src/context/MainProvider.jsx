import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const MainContext = createContext();

function MainProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket",[]);

  function addBasket(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (index !== -1) {
      basket[index].count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  }
  function removeBasket(item) {
    setBasket(basket.filter((x) => x.id !== item.id));
  }
  function getTotal() {
  return  basket.reduce((prev,initial)=>prev + (initial.price * initial.count),0).toFixed(2)
  }
  function isExistBasket(item) {
    return basket.findIndex(x=>x.id === item.id) !== -1
  }
  function getCountFromBasket(item) {
    return basket.find(x=>x.id === item.id).count
  }

  function decreaseBasket(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    const element = basket[index]
    if (element.count > 1) {
      basket[index].count--;
      setBasket([...basket]);
    }
  }

  return (
    <MainContext.Provider value={{ basket, addBasket,decreaseBasket, removeBasket,getTotal,isExistBasket,getCountFromBasket }}>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
