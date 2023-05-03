import { useGoogleLogin } from "@react-oauth/google";
import React, { useContext, useEffect } from "react";
import Button from "./Button";
import { UserContext } from "@/contexts/user";
import Avatar from "./Avatar";
import { ModalContext } from "@/contexts/modal";
import List from "./List";

const CustomLogin = () => {
  const { userData, storeUserData, logout } = useContext(UserContext);
  const { openModal } = useContext(ModalContext);
  const login = useGoogleLogin({
    onSuccess: (token) => {
      getUserInformation(token);
    },
  });

  const getUserInformation = async (token: any) => {
    const res = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });
    if (res.status === 200) {
      const data = await res.json();
      storeUserData({ ...data, token });
    } else {
      logout();
      openModal(<p>Error de credenciales, trata de volver a iniciar sesión</p>);
    }
  };

  useEffect(() => {
    if (userData.isLogged) {
      getUserInformation(userData.token);
    }
  }, []);
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
        <Button action={() => login()} mode="blankButton">
          <List>
            {
              <img
                width="30"
                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
              />
            }
          </List>
        </Button>
      )}
    </>
  );
};

export default CustomLogin;
