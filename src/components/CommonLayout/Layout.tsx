"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import QuickEnquiry from "./QuickEnquiry/QuickEnquiry";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import WhatsappQuery from "./WhatsappQuery/WhatsappQuery";

function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  if (pathName === "/login" || pathName === "/signup") return <>{children}</>;

  return (
    <>
      <Navbar />
      <QuickEnquiry />
      <WhatsappQuery />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Layout;
