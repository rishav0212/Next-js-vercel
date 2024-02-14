import SearchResponse from "@/components/SearchResponse/SearchResponse";
import { Metadata } from "next";

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
  description: "Search Products",
  keywords:"Search Products"
};
