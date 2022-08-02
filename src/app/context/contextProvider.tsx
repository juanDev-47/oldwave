import React, { useState, useContext, createContext } from "react";

export const Context = createContext({
  search: "",
  setSearch: (string) => {},
});

const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <Context.Provider value={{ search, setSearch }}>
      {children}
    </Context.Provider>
  );
};

export const useContextProvider = () => useContext(Context);

export default ContextProvider;
