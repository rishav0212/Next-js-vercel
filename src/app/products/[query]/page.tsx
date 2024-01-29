import SearchResponse from "@/components/SearchResponse/SearchResponse";

import { redirect } from "next/dist/server/api-utils";
import Banner from "@/components/HomeContent/Banner";

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
