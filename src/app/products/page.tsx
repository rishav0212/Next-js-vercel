import DisplayList from "@/components/Pagination/DisplayList";
import items from "@/product_details/names";
import Link from "next/link";
import React from "react";

function Products() {
  return (

    <DisplayList list={items} />
  );
}

export default Products;