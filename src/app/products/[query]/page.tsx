import QueryResponse from "@/components/QueryResponse/SearchResponse";
import { redirect } from "next/dist/server/api-utils";
import Banner from "@/components/Banner";

function Page({ params }) {
  return (
    <>
      <Banner />
      <QueryResponse q={decodeURI(params.query)} />
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
