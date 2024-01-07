import React from "react";
import items from "@/product_details/names";
import Link from "next/link";
import ListWithPagination from "@/components/Pagination/DisplayList";

function queryResponse({ params }) {
  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(params.query.toLowerCase())
  );

  return (
    <ListWithPagination list={filtered} />
  );
}

export default queryResponse;
