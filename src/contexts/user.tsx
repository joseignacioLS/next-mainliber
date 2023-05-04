import React, { ReactNode, createContext, useEffect, useState } from "react";

export interface IToken {
  access_token: string;
  authuser: string;
  expires_in: number;
  prompt: string;
  scope: string;
  token_type: string;
}
interface IGoogleData {
  email: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

interface IUserData extends IGoogleData {
  token: IToken;
  isLogged: boolean;
  isAdmin: boolean;
}

interface IContextData {
  login: (token: IToken) => Promise<boolean | null>;
  logout: () => void;
  storeUserData: (data: IUserData) => void;
  userData: IUserData;
}

export const UserContext = createContext({} as IContextData);

const authUsers = process.env.NEXT_PUBLIC_AUTH_USERS?.split("/") || [];

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState({
    email: "",
    given_name: "",
    id: "",
    locale: "",
    name: "",
    picture: "",
    verified_email: false,
    isLogged: false,
    isAdmin: false,
    token: {
      access_token: "",
      authuser: "",
      expires_in: 0,
      prompt: "",
      scope: "",
      token_type: "",
    },
  } as IUserData);

  const [localStorageChecked, setLocalStorageChecked] = useState(false);

  const saveInLocalStorage = (data: IUserData) => {
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const getLocalStorage = (): IUserData | null => {
    const storage = localStorage.getItem("userData");
    if (!storage) return null;
    return JSON.parse(storage);
  };

  const storeUserData = (data: IUserData): void => {
    setUserData(data);
    saveInLocalStorage(data);
  };

  const getUserInformation = async (token: IToken) => {
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

  const login = async (token: IToken) => {
    const userGoogleData = await getUserInformation(token);
    if (!userGoogleData) return null;
    storeUserData({
      ...userGoogleData,
      token,
      isLogged: true,
      isAdmin: authUsers.includes(userGoogleData?.email?.toLowerCase()),
    });
    return true;
  };

  const logout = () => {
    const data = { isLogged: false, isAdmin: false } as IUserData;
    setUserData(data);
    saveInLocalStorage(data);
  };

  const checkLogState = async () => {
    const localStorageData = getLocalStorage();
    setLocalStorageChecked(true);
    if (localStorageData === null) return logout();
    if (!localStorageData.token?.access_token) return logout();
    login(localStorageData.token);

    // const userGoogleData = await getUserInformation(localStorageData.token);
    // if (userGoogleData === null) return logout();

    // storeUserData({
    //   token: localStorageData.token,
    //   ...userGoogleData,
    //   isLogged: true,
    // });
  };

  useEffect(() => {
    checkLogState();
  }, []);

  return (
    <UserContext.Provider
      value={{
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
