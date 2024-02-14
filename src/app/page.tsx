import HomeContent from "../components/HomeContent/HomeContent";
import Banner from "@/components/HomeContent/Banner";
import { Metadata } from "next";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://old.saarbiotech.in/index.html" />
      </Head>
      <Banner />
      <HomeContent />
    </div>
  );
}
export const metadata: Metadata = {
  title: "Saar Biotech | Thirdparty Pharmaceutical Contract Manufacturing",
  description: `Saar Biotech specializes in high-quality pharmaceutical contract manufacturing, including Liquids, Suspensions, Dry Syrups, Sprays, Ointments, Creams, Capsules, and more. With 18 years of experience and DCGI approval, explore our comprehensive offerings today.`,
  keywords: `Contract Manufacturing, Pharmaceutical Manufacturing, DCGI Approved Drugs, Pharmaceutical Companies, Bulk Medicine Manufacturers, Chandigarh, Top Pharmaceutical Companies, DM, Saar, Biotech, Pharma, Excise-Free Zone, Baddi Himachal, DCGI Approved Molecules, Pharmaceuticals Export India, Third-Party Medicine Manufacturers`,
};
