import React, { useState, createContext, useContext } from "react";

const OpenContext = createContext();

export const useOpen = () => {
    return useContext(OpenContext);
  }

export const OpenProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <OpenContext.Provider value={{isOpen, setIsOpen}}>{children}</OpenContext.Provider>;
};