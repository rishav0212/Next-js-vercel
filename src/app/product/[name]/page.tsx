import info from "@/product_details/info";
import { Metadata } from "next";
import ProductPage from "@/components/ProductPages/ProductPages";

export default async function ProductTemplate({ params }) {
  return <ProductPage name={params.name} />;
}

export async function generateStaticParams() {
  return Object.keys(info).map((key) => ({
    name: key.toLowerCase(),
  }));
}

export const metadata: Metadata = {
  title: "Products | Saar Biotech",
  description: "",
};

// export default ProductTemplate;
