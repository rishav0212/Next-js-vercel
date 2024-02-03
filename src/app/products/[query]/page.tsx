import SearchResponse from "@/components/SearchResponse/SearchResponse";
import { ResolvingMetadata, Metadata } from "next";
import { Props } from "next/script";

function Page({ params }) {
  return (
    <>
      <SearchResponse q={decodeURI(params.query)} />
    </>
  );
}

export default Page;

export async function generateStaticParams() {
  return [
    { query: "Suspensions" },
    { query: "Syrups" },
    { query: "External Preparations" },
    { query: "Miscellaneous Products" },
    { query: "Tablets" },
    { query: "Capsules" },
    { query: "Sachets" },
  ];
}

export async function generateMetadata({ params }): Promise<Metadata> {
  // read route params
  const cate = params.query;
  console.log(cate);
  console.log(decodeURI(cate));
  const meta = {
    Suspensions: {
      description:
        "Saar Biotech Deals in Liquids, Suspensions, Dry syrups, sprays, Nasal sprays, Ointments, Tablets,creams, skin ceams, antibiotic, Anticold, Analgesic & Anti-inflammatory, Antacid, Dry Syrups, Tonic, Drops, Cough, Shampoo, Lotions, Roll On, Capsules, Sachets in very attractive packings for Amber Bottle PACKING, measuring Cap, Blister Packing, Metallic Cartons. Saar Biotech is GMP Certified company involved in making DCGI approved new Drugs from Past four years",
      keywords: `Suspensions, thick liquid, dense, viscous,Contract manufacturing, export, exports, exporter, exporters,DM,Saar, biotech, Pharma, Excise freee Zone ,DCGI approved drugs, Saar Biotech, 
  Pharmaceutical Manufacturing,  companies in India,  PHARMACEUTICAL, Manufacturers ,Baddi Himachal,Third party medicine manufacturers ,
  Bulk medicine manufacturers in Chandigarh,  Top Pharmaceutical companies in Chandigarh,  DCGI Approved Molecules, pharmaceutical companies in India, 
  pharmaceuticals export india, top 10 pharmaceutical companies , third party, medicine, manufacturer, pharmaceutical manufacturer in india,pharma exporters, medicines `,
    },
    Syrups: {
      description: `Saar Biotech Deals in Liquids, Syrups,Suspensions, Dry syrups, sprays, Nasal sprays, Ointments, Tablets,creams, skin ceams, antibiotic, Anticold, Analgesic & Anti-inflammatory, Antacid, Dry Syrups, Tonic, Drops, Cough, Shampoo, Lotions, Roll On, Capsules, Sachets in very attractive packings for Amber Bottle PACKING, measuring Cap, Blister Packing, Metallic Cartons. Saar Biotech is GMP Certified company 
    involved in making DCGI approved new Drugs from Past four years`,
      keywords: `syrups, flavour, color, different, bottle, amber bottle, tonic, dry , iron syrup, lycopene syrup, antacid suspensions,Contract manufacturing, export, exports, exporter, exporters,DM,Saar, biotech, Pharma, Excise freee Zone ,DCGI approved drugs, Saar Biotech, 
    Pharmaceutical Manufacturing,  companies in India,  PHARMACEUTICAL, Manufacturers ,Baddi Himachal,Third party medicine manufacturers ,
    Bulk medicine manufacturers in Chandigarh,  Top Pharmaceutical companies in Chandigarh,  DCGI Approved Molecules, pharmaceutical companies in India, 
    pharmaceuticals export india, top 10 pharmaceutical companies , third party, medicine, manufacturer, pharmaceutical manufacturer in india,pharma exporters, medicines`,
    },
    "External%20Preparations": { description: "", keywords: "" },
    "Miscellaneous%20Products": { description: "", keywords: "" },
    Tablets: { description: "", keywords: "" },
    Sachets: { description: "", keywords: "" },
    Capsules: { description: "", keywords: "" },
  };
  const title =
    decodeURI(cate) +
    " | Saar Biotech| Third party Medicine Contract Manufacturing";

  return {
    title: title,
    description: meta[cate].description,
    keywords: meta[cate].keywords,
  };
}
