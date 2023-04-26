import React, { createContext, useEffect, useState } from "react";

interface IUserData {
  storeUserData: ({}: any) => void;
  userData: {};
}

const saveInLocalStorage = (data: any) => {
  localStorage.setItem("userData", JSON.stringify(data));
};

const getLocalStorage = (): any => {
  const storage = localStorage.getItem("userData");
  if (!storage) return {};
  return JSON.parse(storage);
};

export const UserContext = createContext({} as IUserData);

export const UserContextProvider = ({ children }: { children: any }) => {
  const [userData, setUserData] = useState({});

  const storeUserData = (retrievedData: {}): void => {
    setUserData(retrievedData);
    saveInLocalStorage(retrievedData);
  };

  useEffect(() => {
    setUserData(getLocalStorage());
  }, []);
  return (
    <UserContext.Provider
      value={{
        storeUserData,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
