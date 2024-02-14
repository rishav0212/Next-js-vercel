import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import AppThemeProvider from "@/theme";
import "@/fonts/fonts.css";
import Layout from "@/components/CommonLayout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saar Biotech",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/fevicon.png",
  },
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
            <Layout>{children}</Layout>
          </AppThemeProvider>
        </AppRouterCacheProvider>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P50ZVEHX0H"
        ></Script>
        <Script id="analytics script">
          {` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

             gtag('config', 'G-P50ZVEHX0H');`}
        </Script>
      </body>
    </html>
  );
}
