"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [search, setSearch] = useState("");

  return (
    <Context.Provider
      value={{ error, setError, loading, setLoading, search, setSearch }}
    >
      {children}
    </Context.Provider>
  );
};

export const useContextApp = () => useContext(Context);
