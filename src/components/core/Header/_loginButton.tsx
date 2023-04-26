import { UserContext } from "@/contexts/user";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useContext, useState } from "react";
import Avatar from "../../Shared/Avatar/_avatar";
import Button from "@/components/Shared/Button";

const LoginButton = ({}) => {
  const {
    userData,
    storeUserData,
  }: { userData: any; storeUserData: ({}: any) => void } =
    useContext(UserContext);

  return (
    <>
      {userData?.email ? (
        <>
          <Avatar picture={userData.picture} height={5}></Avatar>
          <Button text={"Logout"} action={() => storeUserData({})} isMain={false}></Button>
        </>
      ) : (
        <GoogleLogin
          type="icon"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            if (credentialResponse?.credential) {
              const decodedCredential: any = jwt_decode(
                credentialResponse.credential
              );
              storeUserData(decodedCredential);
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
