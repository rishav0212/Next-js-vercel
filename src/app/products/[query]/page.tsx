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
        "Saar Biotech specializes in the production of high-quality suspensions, offering a range of dense, viscous liquid formulations. Our suspension products are crafted with precision and adhere to stringent quality standards. Explore our comprehensive pharmaceutical offerings, ensuring quality, safety, and efficacy in every product we deliver.",
      keywords:
        "suspensions, liquid suspensions, dense liquids, viscous liquids, pharmaceutical suspensions, high-quality suspensions, suspension formulations, pharmaceutical manufacturing, contract manufacturing, pharmaceutical companies, DCGI approved drugs, Saar Biotech, pharmaceuticals export, third-party medicine manufacturers",
    },
    Syrups: {
      description:
        "Discover a wide range of high-quality syrups offered by Saar Biotech. Our syrups are meticulously formulated to deliver effective and reliable results. From flavored syrups to nutritional supplements, we cater to diverse healthcare needs. Explore our extensive portfolio of syrups, backed by our commitment to excellence in pharmaceutical manufacturing.",
      keywords:
        "syrups, pharmaceutical syrups, flavored syrups, nutritional syrups, pharmaceutical manufacturing, contract manufacturing, pharmaceutical companies, DCGI approved drugs, Saar Biotech, pharmaceuticals export, third-party medicine manufacturers",
    },
    "External%20Preparations": {
      description:
        "Saar Biotech offers a range of external preparations designed to address various dermatological and topical healthcare needs. Our external preparations include ointments, creams, and other topical solutions, formulated to provide effective relief and skincare benefits. Explore our external preparations and experience the quality and efficacy of Saar Biotech products.",
      keywords:
        "external preparations, dermatological preparations, topical preparations, ointments, creams, skincare products, pharmaceutical manufacturing, contract manufacturing, pharmaceutical companies, DCGI approved drugs, Saar Biotech, pharmaceuticals export, third-party medicine manufacturers",
    },
    "Miscellaneous%20Products": {
      description:
        "Explore Saar Biotech's miscellaneous pharmaceutical products, encompassing a diverse range of healthcare solutions. From specialized formulations to innovative healthcare products, our miscellaneous products cater to various medical needs. Discover our commitment to excellence and innovation in pharmaceutical manufacturing.",
      keywords:
        "miscellaneous products, pharmaceutical products, healthcare solutions, specialized formulations, innovative healthcare products, pharmaceutical manufacturing, contract manufacturing, pharmaceutical companies, DCGI approved drugs, Saar Biotech, pharmaceuticals export, third-party medicine manufacturers",
    },
    Tablets: {
      description:
        "Saar Biotech offers a wide array of high-quality tablets, meticulously formulated to provide effective and reliable medication delivery. Our tablets cover a spectrum of therapeutic areas, ensuring comprehensive healthcare solutions. Explore our extensive range of tablets, crafted with precision and backed by our commitment to pharmaceutical excellence.",
      keywords:
        "tablets, pharmaceutical tablets, medication tablets, therapeutic tablets, pharmaceutical manufacturing, contract manufacturing, pharmaceutical companies, DCGI approved drugs, Saar Biotech, pharmaceuticals export, third-party medicine manufacturers",
    },
    Sachets: {
      description:
        "Discover Saar Biotech's range of pharmaceutical sachets, offering convenient and efficient medication delivery solutions. Our sachet products are designed for ease of use and are available in a variety of formulations. Explore our sachet offerings, crafted with precision and adhering to stringent quality standards.",
      keywords:
        "sachets, pharmaceutical sachets, medication sachets, pharmaceutical manufacturing, contract manufacturing, pharmaceutical companies, DCGI approved drugs, Saar Biotech, pharmaceuticals export, third-party medicine manufacturers",
    },
    Capsules: {
      description:
        "Saar Biotech provides a comprehensive range of high-quality capsules, formulated to deliver precise medication dosages. Our capsules cover various therapeutic areas, ensuring effective and reliable healthcare solutions. Explore our capsule offerings, crafted with precision and backed by our commitment to pharmaceutical excellence.",
      keywords:
        "capsules, pharmaceutical capsules, medication capsules, therapeutic capsules, pharmaceutical manufacturing, contract manufacturing, pharmaceutical companies, DCGI approved drugs, Saar Biotech, pharmaceuticals export, third-party medicine manufacturers",
    },
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
