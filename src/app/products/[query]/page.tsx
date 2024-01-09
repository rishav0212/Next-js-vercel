import QueryResponse from "@/components/QueryResponse/QueryResponse";

function Page({ params }) {



  return (
    <QueryResponse q = {params.query}/>
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