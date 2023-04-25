import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import LoginButton from "./_loginButton";

const GoogleLogin = () => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <LoginButton></LoginButton>
    </GoogleOAuthProvider>
  );
};

export default GoogleLogin;
