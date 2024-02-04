import Image from "next/image";
import HomeContent from "../components/HomeContent/HomeContent";
//import styles from "./page.module.css";
import Banner from "@/components/HomeContent/Banner";
import AppThemeProvider from "@/theme";
import { Metadata } from "next";

export default function Home() {
  return (
    <div>
      <Banner />
      <HomeContent />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Saar Biotech | Thirdparty Pharmaceutical Contract Manufacturing",
  description: `Saar Biotech specializes in the production of high-quality Liquids, Suspensions, Dry Syrups, Sprays, Nasal Sprays, Ointments, Creams, Skin Creams, Antibiotics, Anticold, Analgesic & Anti-inflammatory medications, Antacids, Tonic formulations, Drops, Cough remedies, Shampoos, Lotions, Roll On products, Capsules, and Sachets. Our products come in attractive packagings with features such as measuring caps, blister packing, and metallic cartons.
  As a GMP Certified company, Saar Biotech has been dedicatedly crafting DCGI approved new drugs for the past fourteen years. Explore our comprehensive pharmaceutical offerings, ensuring quality, safety, and efficacy in every product we deliver.`,
  keywords: `Contract Manufacturing, Pharmaceutical Manufacturing, Export of DCGI Approved Drugs, Third party medicine manufacturers, Pharmaceutical Companies in India, Bulk Medicine Manufacturers in Chandigarh, Top Pharmaceutical Companies in Chandigarh, DM, Saar, biotech, Pharma, Excise freee Zone, DCGI approved drugs, Saar Biotech, Baddi Himachal, DCGI Approved Molecules,  pharmaceuticals export india, top 10 pharmaceutical companies , third party, medicine, manufacturer, pharmaceutical manufacturer in india, pharma exporters, Third-Party Medicine Manufacturers`,
};
