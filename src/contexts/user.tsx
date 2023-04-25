import React, { createContext, useState } from "react";

interface IUserData {
  storeUserData: ({}: any) => void;
  userData: {};
}

export const UserContext = createContext({} as IUserData);

export const UserContextProvider = ({ children }: { children: any }) => {
  const [userData, setUserData] = useState({} as any);

  const storeUserData = (retrievedData: {}): void => {
    setUserData(retrievedData);
  };
  return (
    <UserContext.Provider
      value={{
        storeUserData,
        userData,
      }}
    >
      {" "}
      {children}{" "}
    </UserContext.Provider>
  );
};
