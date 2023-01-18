import "../styles/globals.css";
import AppProvider from "../context/AppContext";
import Footer from "./Footer";
import Header from "./Header";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

// disableReactDevTools();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-inter">
        <AppProvider>
          <Header />
          {/* Workaround for fixed header block hero content, added mt-11 to the div */}
          <div className="mt-11">{children}</div>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
