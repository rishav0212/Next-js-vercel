import items from "@/product_details/names";
import Link from "next/link";
import React from "react";

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={"/products/" + item.name}>
              {item.id} - {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
