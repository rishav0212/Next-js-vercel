import AboutContent from "@/components/About/AboutContent";
import { Metadata } from "next";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        {" "}
        <link rel="canonical" href="https://old.saarbiotech.in/about.html" />
      </Head>
      <AboutContent />
    </>
  );
}

export const metadata: Metadata = {
  title: "About Saar Biotech | Pharmaceutical Contract Manufacturer",
  description:
    "Saar Biotech specializes in contract manufacturing of high-quality pharmaceuticals including Liquids, Suspensions, Tablets, Ointments, Creams, Capsules, and more. GMP certified with 18 years of experience, delivering DCGI approved drugs.",
  keywords:
    "Contract Manufacturing, Pharmaceutical Manufacturing, DCGI Approved Drugs, Bulk Medicine Manufacturers, Top Pharmaceutical Companies, Saar Biotech, Pharma Industry, Baddi Himachal, Excise-Free Zone, GMP Certified Pharma Company, Pharmaceuticals Export India, Medicine Manufacturer, Pharma Exporter, Pharmaceutical Formulations",
};
