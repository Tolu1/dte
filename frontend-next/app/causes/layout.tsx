import CharityProvider from "../../context/CharityContext";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CharityProvider>
      <div>{children}</div>
    </CharityProvider>
  );
}

export default Layout;
