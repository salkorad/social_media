import { createContext, useEffect, useState } from "react";
import userImage from "../assets/salkoimage.png";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setCurrentUser({id: 1, name:"Salko Radovovic",
                    profilePic: userImage})
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{currentUser, login  }}>
      {children}
    </AuthContext.Provider>
  );
};