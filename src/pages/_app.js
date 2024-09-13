import "@/styles/globals.css";
import AuthStateChangeProvider from "@/context/auth";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthStateChangeProvider />
      <Component {...pageProps} />
    </>
  );
}
