import { ModalContextProvider } from "@/contexts/modal";
import { UserContextProvider } from "@/contexts/user";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <ModalContextProvider>
        <Component {...pageProps} />
      </ModalContextProvider>
    </UserContextProvider>
  );
}
