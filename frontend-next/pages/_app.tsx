import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import CharityProvider from "@/context/CharityContext";
import Loading from "@/components/Loading";
import NavbarProvider from "@/context/NavbarContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavbarProvider>
        <Loading />
        <Layout>
          <CharityProvider>
            <Component {...pageProps} />
          </CharityProvider>
        </Layout>
      </NavbarProvider>
    </>
  );
}
