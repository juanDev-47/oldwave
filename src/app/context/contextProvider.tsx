import React, { useState, useContext, createContext } from "react";

export const Context = createContext({
  search: "",
  setSearch: (any) => {},
  category: "",
  setCategory: (any) => {},
  cartInfo: {},
  setCartInfo: (any) => {}, // below is the cartInfo object
  drawerOpen: false,
  setDrawerOpen: (any) => {},
  showSearchBox: false,
  setShowSearchBox: (any) => {},
  cart: [],
  setCart: (any) => {},
  showCart: false,
  setShowCart: (any) => {},
});

const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [cartInfo, setCartInfo] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <Context.Provider
      value={{
        search,
        setSearch,
        category,
        setCategory,
        cartInfo,
        setCartInfo,
        drawerOpen,
        setDrawerOpen,
        showSearchBox,
        setShowSearchBox,
        cart,
        setCart,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useContextProvider = () => useContext(Context);

export default ContextProvider;
