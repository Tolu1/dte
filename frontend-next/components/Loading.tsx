import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { NavbarContext } from "@/context/NavbarContext";

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { setNavbarExpanded } = useContext(NavbarContext);

  useEffect(() => {
    const handleStart = (url: any) => {
      if (url !== router.asPath) {
        setLoading(true);
        setNavbarExpanded(false);
      }
    };
    const handleComplete = (url: any) =>
      url === router.asPath && setLoading(false);
    //   setTimeout(() => {
    //     setLoading(false);
    //   }, 5000);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    <>
      {loading ? (
        <div className="transition-all duration-500">
          <div className="fixed top-0 z-[9998] w-full h-full">
            <div className="w-screen h-screen flex justify-center items-center bg-white">
              <img
                className="w-11 h-11 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
                src="/images/plant.gif"
                alt=""
              />
            </div>
          </div>
          <div className="fixed top-0 z-[9999] w-full h-full">
            <div className="w-screen h-screen bg-green opacity-[0.03]"></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Loading;
