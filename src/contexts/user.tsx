import React, { createContext, useEffect, useState } from "react";

interface IUserData {
  logout: any;
  storeUserData: ({}: any) => void;
  userData: any;
  hasAuth: any;
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

const authUsers = process.env.NEXT_PUBLIC_AUTH_USERS?.split("/") || [];

export const UserContextProvider = ({ children }: { children: any }) => {
  const [userData, setUserData] = useState({} as any);
  const [localStorageChecked, setLocalStorageChecked] = useState(false);

  const storeUserData = (retrievedData: {}): void => {
    setUserData((oldValue: any) => {
      const joinedData = { ...oldValue, ...retrievedData, isLogged: true };
      saveInLocalStorage(joinedData);
      return joinedData;
    });
  };

  const logout = () => {
    const data = { isLogged: false };
    setUserData(data);
    saveInLocalStorage(data);
  };

  const hasAuth = () => {
    if (!localStorageChecked) return true;
    return authUsers.includes(userData?.email?.toLowerCase());
  };

  useEffect(() => {
    setUserData(getLocalStorage());
    setLocalStorageChecked(true);
  }, []);
  return (
    <UserContext.Provider
      value={{
        hasAuth,
        logout,
        storeUserData,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
