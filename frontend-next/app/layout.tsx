import "../styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className="font-inter">
          <Header />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </body>
      </html>
    );
  }