"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import styles from "./pagination.module.css";
import paginationRange from "@/utils/appUtils";

const MakeRows = ({ paginatedList }) => {
  //FUNCTION TO MAKE ROWS CATEGORY BY COUNTING PRODUCTS IN MAIN CATEGORY AND SUB CATEGORY
  let Main = paginatedList[0].mainCategory;
  let numberOfProductsMain = [];
  let count = 0;
  paginatedList.map((item) => {
    if (item.mainCategory === Main) count++;
    else {
      numberOfProductsMain.push(count);
      Main = item.mainCategory;
      count = 1;
    }
  });
  numberOfProductsMain.push(count);

  let Sub = paginatedList[0].subCategory;
  let numberOfProductsSub = [];
  count = 0;
  paginatedList.map((item) => {
    if (item.subCategory === Sub) count++;
    else {
      numberOfProductsSub.push(count);
      Sub = item.subCategory;
      count = 1;
    }
  });
  numberOfProductsSub.push(count);

  let prevMain = "";
  let prevMainIndex = 0;
  let prevSub = "";
  let prevSubIndex = 0;

  return (
    <>
      {paginatedList.map((product, index) => {
        if (
          paginatedList[index - 1] &&
          paginatedList[index - 1].mainCategory !== prevMain
        ) {
          prevMain = paginatedList[index - 1].mainCategory;
          prevMainIndex++;
        }
        if (
          paginatedList[index - 1] &&
          paginatedList[index - 1].subCategory !== prevSub
        ) {
          prevSub = paginatedList[index - 1].subCategory;
          prevSubIndex++;
        }
        return (
          <tr key={index}>
            {product.mainCategory !== prevMain ? (
              <td
                rowSpan={numberOfProductsMain[prevMainIndex]}
                className="align-top"
              >
                {product.mainCategory}
              </td>
            ) : null}
            {product.subCategory !== prevSub ? (
              <td
                rowSpan={numberOfProductsSub[prevSubIndex]}
                className="align-top"
              >
                {product.subCategory}
              </td>
            ) : null}
            <td>{product.name}</td>
            <td>
              <Link
                href={
                  product.link.includes("dmpharma")
                    ? product.link
                    : "/product/" + product.link
                }
              >
                {product.name}
              </Link>
            </td>
          </tr>
        );
      })}
    </>
  );
};

const DisplayList = ({ list, initialPage = 1 }) => {
  const all_products = [];
  Object.keys(list).map((main) => {
    Object.keys(list[main]).map((sub) => {
      list[main][sub].map((product) => {
        all_products.push(product);
      });
    });
  });

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [limit, setLimit] = useState(10);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(all_products.length / limit);

  const paginatedList = all_products.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  let array = paginationRange(totalPages, currentPage, limit, 1);

  useEffect(() => {
    array = paginationRange(totalPages, currentPage, limit, 1);
  }, [currentPage, limit]);

  return (
    <div className="container py-4 ">
      <nav className="d-flex justify-content-center">
        <ul className={"pagination"}>
          <li>
            <button
              className={`btn page-item ${styles.prev} ${
                currentPage === 1 ? `disabled ${styles.disabled}` : ""
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
              <span>Prev</span>
            </button>
          </li>

          {array.map((value, index) => (
            <li key={index}>
              {value === "..." || value === "... " ? (
                <button className={"disabled " + styles["button-des"]}>
                  {value}
                </button>
              ) : (
                <button
                  className={`${styles["button-des"]} ${
                    currentPage === value ? styles.active : null
                  } btn page-item `}
                  onClick={() => handlePageChange(value)}
                >
                  {value}
                </button>
              )}
            </li>
          ))}

          <li>
            <button
              className={`btn page-item ${styles.prev} ${
                currentPage === Math.ceil(all_products.length / limit)
                  ? `disabled ${styles.disabled}`
                  : ""
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label="Next"
            >
              <span>Next</span>
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
        <div className={styles.entries}>
          <span className="p-2">Show</span>
          <select
            className="p-1"
            onChange={(e) => {
              setLimit(Number(e.target.value));
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <span className="p-2">entries</span>
        </div>
      </nav>

      <div className="container justify-content-center ">
        <table className="table table-light table-responsive table-bordered align-middle ">
          <caption>Products</caption>
          <thead className="table-primary">
            <tr>
              <th className="p-3">Main Category</th>
              <th className="p-3">Sub Category</th>
              <th className="p-3">Composition</th>
              <th className="p-3">Link</th>
            </tr>
          </thead>
          <tbody>
            {paginatedList.length ? (
              <MakeRows paginatedList={paginatedList} />
            ) : (
              <tr>
                <td>No Products Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayList;
