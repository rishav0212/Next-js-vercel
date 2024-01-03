import React from "react";
import items from "@/product_details/names";
import Link from "next/link";

function queryResponse({ params }) {
  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(params.query.toLowerCase())
  );

  return (
    <div>
      <h1>Products with {params.query}</h1>
      <ul>
        {filtered.map((item) => (
          <Link href={"/product/" + item.name} key={item.id}>
            <li>
              {item.id} : {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default queryResponse;
