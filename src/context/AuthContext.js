import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  const getStarted = async () => {
    setUserToken("I am token");
  };

  return (
    <AuthContext.Provider
      value={{
        userToken,
        getStarted,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
