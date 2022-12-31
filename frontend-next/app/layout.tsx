import "../styles/globals.css";
import Head from "./head";

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <Head />
        <body className="font-inter">{children}</body>
      </html>
    );
  }