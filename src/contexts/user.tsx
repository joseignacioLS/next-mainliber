import React, { createContext, useEffect, useState } from "react";

interface IUserData {
  login: any;
  logout: any;
  storeUserData: ({}: any) => void;
  userData: any;
  hasAuth: any;
}

export const UserContext = createContext({} as IUserData);

const authUsers = process.env.NEXT_PUBLIC_AUTH_USERS?.split("/") || [];

export const UserContextProvider = ({ children }: { children: any }) => {
  const [userData, setUserData] = useState({} as any);
  const [localStorageChecked, setLocalStorageChecked] = useState(false);

  const saveInLocalStorage = (data: any) => {
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const getLocalStorage = (): any => {
    const storage = localStorage.getItem("userData");
    if (!storage) return null;
    return JSON.parse(storage);
  };

  const storeUserData = (data: {}): void => {
    setUserData(data);
    saveInLocalStorage(data);
  };

  const getUserInformation = async (token: any) => {
    const res = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });
    if (res.status === 200) {
      const data = await res.json();
      return data;
    } else {
      return null;
    }
  };

  const login = async (token: any) => {
    const userGoogleData = await getUserInformation(token);
    if (!userGoogleData) return null;
    storeUserData({ ...userGoogleData, token, isLogged: true });
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

  const checkLogState = async () => {
    const localStorageData = getLocalStorage();
    setLocalStorageChecked(true);
    if (localStorageData === null) return logout();
    if (!localStorageData.token?.access_token) return logout();

    const userGoogleData = await getUserInformation(localStorageData.token);
    if (userGoogleData === null) return logout();

    storeUserData({
      token: localStorageData.token,
      ...userGoogleData,
      isLogged: true,
    });
  };

  useEffect(() => {
    checkLogState();
  }, []);
  
  return (
    <UserContext.Provider
      value={{
        hasAuth,
        logout,
        storeUserData,
        userData,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
