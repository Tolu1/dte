"use client";
import "../styles/globals.css";
import AppProvider from "../context/AppContext";
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (
      <html lang="en">
        <body className="font-inter">
        <AppProvider>
          <Header />
          // Workaround for fixed header block hero content, added mt-12 to the section element class
          {/* <div className="mt-12"></div> */}
          <div className="mt-11">
            {children}
          </div>
          <Footer />
        </AppProvider>
        </body>
      </html>
    );
  }