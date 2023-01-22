import { Plus_Jakarta_Sans } from "@next/font/google";
import AppProvider from "@/context/AppContext";
import Footer from "@/components/Footer";
import React from "react";
import Header from "./Header";

const pj = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-pj" });

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${pj.variable} font-pj`}>
      <AppProvider>
        <Header />
        {/* Workaround for fixed header block hero content, added mt-11 to the div */}
        <div className="mt-11">{children}</div>
        <Footer />
      </AppProvider>
    </div>
  );
}

export default Layout;
