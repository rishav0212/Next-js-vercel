import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import Navbar from "@/components/CommonLayout/Navbar/Navbar";
import Footer from "@/components/CommonLayout/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import AppThemeProvider from "@/theme";
import "@/fonts/fonts.css";
import ScrollToTop from "@/components/CommonLayout/ScrollToTop/ScrollToTop";
import QuickEnquiry from "@/components/CommonLayout/QuickEnquiry/QuickEnquiry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saar Biotech",
  description: "",
  icons:{
    icon:"/fevicon.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontSize: "calc(calc(15px + 0.390625vw) * 0.54)",
        }}
      >
        <AppRouterCacheProvider>
          <AppThemeProvider>
            <Navbar />
            <QuickEnquiry />
            {children}
            <ScrollToTop />
            <Footer />
          </AppThemeProvider>
        </AppRouterCacheProvider>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
      </body>
    </html>
  );
}
