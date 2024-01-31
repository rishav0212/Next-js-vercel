import SearchResponse from "@/components/SearchResponse/SearchResponse";
import { Metadata } from "next";
import Banner from "@/components/HomeContent/Banner";

function Products() {
  return (
    <>
      <SearchResponse />
    </>
  );
}

export default Products;

export const metadata: Metadata = {
  title: "Products | Saar Biotech",
  description: "",
};
