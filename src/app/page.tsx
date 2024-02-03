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
  title: "Saar Biotech | Third party Medicine Contract Manufacturing",
  description: `Saar Biotech Deals in Liquids, Suspensions, Dry syrups, sprays, Nasal sprays, Ointments, Tablets,creams, skin ceams, antibiotic, Anticold, Analgesic & Anti-inflammatory, Antacid, Dry Syrups, Tonic, Drops, Cough, Shampoo, Lotions, Roll On, Capsules, Sachets in very attractive packings for Amber Bottle PACKING, measuring Cap, Blister Packing, Metallic Cartons. Saar Biotech is GMP Certified company 
  involved in making DCGI approved new Drugs from Past four years`,
  keywords: `Contract manufacturing, export, exports, exporter, exporters,DM,Saar, biotech, Pharma, Excise freee Zone ,DCGI approved drugs, Saar Biotech, 
  Pharmaceutical Manufacturing,  companies in India,  PHARMACEUTICAL, Manufacturers ,Baddi Himachal,Third party medicine manufacturers ,
  Bulk medicine manufacturers in Chandigarh,  Top Pharmaceutical companies in Chandigarh,  DCGI Approved Molecules, pharmaceutical companies in India, 
  pharmaceuticals export india, top 10 pharmaceutical companies , third party, medicine, manufacturer, pharmaceutical manufacturer in india,pharma exporters, medicines `,
};
