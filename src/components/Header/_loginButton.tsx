import { UserContext } from "@/contexts/user";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useContext, useState } from "react";
import Avatar from "../Avatar/_avatar";

const LoginButton = ({}) => {
  const {
    userData,
    storeUserData,
  }: { userData: any; storeUserData: ({}: any) => void } =
    useContext(UserContext);

  return (
    <>
      {userData?.isLogged ? (
        <Avatar picture={userData.picture} height={5}></Avatar>
      ) : (
        <GoogleLogin
          type="icon"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            if (credentialResponse?.credential) {
              const decodedCredential: any = jwt_decode(
                credentialResponse.credential
              );
              storeUserData({
                isLogged: true,
                name: decodedCredential.given_name,
                email: decodedCredential.email,
                picture: decodedCredential.picture,
              });
            }
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap={true}
        ></GoogleLogin>
      )}
    </>
  );
};

export default LoginButton;
