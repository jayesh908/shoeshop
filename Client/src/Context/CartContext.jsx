import React, { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

const Cartpro = ({ children }) => {
  const [carti, setcarti] = useState([]);
  const[wishlist,setwishlist] = useState([]);


  useEffect(() => {
    const existingcart = localStorage.getItem("cart");
    if (existingcart) 
    setcarti(JSON.parse(existingcart));
  }, []);
  useEffect(() => {
    const existingwishlist = localStorage.getItem("wishlist");
    if (existingwishlist) setwishlist(JSON.parse(existingwishlist));
  }, []);
  return (
    <CartContext.Provider value={{ carti, setcarti,wishlist,setwishlist }}>
      {children}
    </CartContext.Provider>
  );
};


export default Cartpro;