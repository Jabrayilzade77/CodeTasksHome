import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const WishListContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setwislist] = useLocalStorage("wislist",[]);

  function addwishlist(item) {
    const index = wishlist.findIndex((x) => x.id === item.id);
    if (index !== -1) {
      setwislist(wishlist.filter((x) => x.id !== item.id));
    } 
    else {
      setwislist([...wishlist, { ...item}]);
    }
  }

  function isExistwishlist(item) {
    return wishlist.findIndex(x=>x.id === item.id) !== -1
  }
 

 

  return (
    <WishListContext.Provider value={{ wishlist, addwishlist,isExistwishlist }}>
      {children}
    </WishListContext.Provider>
  );
}

export default WishlistProvider;
