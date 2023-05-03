import { useGoogleLogin } from "@react-oauth/google";
import React, { useContext, useEffect } from "react";
import Button from "./Button";
import { IToken, UserContext } from "@/contexts/user";
import Avatar from "./Avatar";
import { ModalContext } from "@/contexts/modal";
import List from "./List";

const CustomLogin = () => {
  const { userData, storeUserData, logout, login } = useContext(UserContext);
  const { openModal } = useContext(ModalContext);
  const googleLogin = useGoogleLogin({
    onSuccess: (token: any) => {
      if (!login(token as IToken)) openModal(<p>Login Error</p>);
    },
  });

  return (
    <>
      {userData.isLogged ? (
        <>
          <Avatar picture={userData.picture} height={5}></Avatar>
          <Button action={() => logout()} mode="blankButton">
            Logout
          </Button>
        </>
      ) : (
        <Button action={() => googleLogin()} mode="blankButton">
          <List>
            <img
              width="30"
              src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            />
          </List>
        </Button>
      )}
    </>
  );
};

export default CustomLogin;
