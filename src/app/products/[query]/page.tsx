import QueryResponse from "@/components/QueryResponse/QueryResponse";
import { redirect } from "next/dist/server/api-utils";

function Page({ params }) {



  return (
    <QueryResponse q = {decodeURI(params.query)}/>
  );
}

export default Page;

export async function generateStaticParams() {
  return(
  [
    { 'query': "Suspensions" },
    { 'query': "Syrups" }, 
    { 'query': "External Preparation" }, 
    { 'query': "Miscellaneous Products" }, 
    { 'query': "tablets" },
    { 'query': "capsules" },
    { 'query': "sachets" }
  ]
)
}