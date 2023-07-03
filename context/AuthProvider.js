import react, { createContext, useState } from "react";
import { useState } from "react";
import * as SecureStore from 'expo-secure-store';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: (email, password) => {
          // comunicate backend secure and secure store user data
          setUser("Andre");
          SecureStore.setItemAsync("user", 'ande');
        },
        logout: () => {
          setUser(null);
          SecureStore.removeItemAsync("user");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
