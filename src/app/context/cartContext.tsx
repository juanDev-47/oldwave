import React, { createContext, useContext, useState } from "react";

export const UIContext = createContext({
  drawerOpen: false,
  setDrawerOpen: (any) => {},
  showSearchBox: false,
  setShowSearchBox: (any) => {},
  cart: {},
  setCart: (any) => {},
  showCart: false,
  setShowCart: (any) => {},
});


export const CartContext = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <UIContext.Provider value={{ drawerOpen, setDrawerOpen, showSearchBox, setShowSearchBox, cart, setCart, showCart, setShowCart }}>
      {children}
    </UIContext.Provider>
  );
}

export const useIUContext = () => useContext(UIContext);