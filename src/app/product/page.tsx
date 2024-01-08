import { Metadata } from "next";
import { redirect } from "next/navigation";

function Products() {
  redirect("/products/!")

  return (
    <div>
      
    </div>
  );
}

export default Products;

export const metadata: Metadata = {
  title: "About Us | Saar Biotech",
  description: "",
};
