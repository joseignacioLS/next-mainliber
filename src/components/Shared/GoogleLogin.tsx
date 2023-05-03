import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import React from "react";
import CustomLogin from "./CustomLogin";

const GoogleLogin = () => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <CustomLogin></CustomLogin>
    </GoogleOAuthProvider>
  );
};

export default GoogleLogin;
