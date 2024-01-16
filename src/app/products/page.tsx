import SearchResponse from "@/components/SearchResponse/SearchResponse";
import { Metadata } from "next";
import Banner from "@/components/Banner";

function Products() {
  return (
    <>
      <Banner />
      <SearchResponse />
    </>
  );
}

export default Products;

export const metadata: Metadata = {
  title: "Products | Saar Biotech",
  description: "",
};
