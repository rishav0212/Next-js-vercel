import { MetadataRoute } from "next";
import info from "@/product_details/info";

const url = "https://node.saarbiotech.in";

export default function sitemap(): MetadataRoute.Sitemap {

  const routes = ['','about','contact','products'].map((key) => ({
    url: `${url}/${key}`,
    lastModified: new Date(),
    // changeFrequency: "monthly",
    priority: 1,
  }))


  const products = Object.keys(info).map((key) => ({
    url: `${url}/products/${key}`,
    lastModified: new Date(),
    // changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...routes,...products];
}

// export async function generateStaticParams() {
//   return [{}]
// }
