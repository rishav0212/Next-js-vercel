"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import styles from "./pagination.module.css";
import paginationRange from "@/utils/appUtils";
import { Grid, useMediaQuery, Paper } from "@mui/material";
import { useTheme } from "@mui/system";

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

  let prevMain = "-1";
  let prevMainIndex = 0;
  let prevSub = "-1";
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
                className="align-top "
                style={{ backgroundColor: "#FEE5D0" }}
              >
                {product.mainCategory}
              </td>
            ) : null}
            {product.subCategory !== prevSub ? (
              <td
                rowSpan={numberOfProductsSub[prevSubIndex]}
                className="align-top "
                style={{ backgroundColor: "#FEE5D0" }}
              >
                {product.subCategory}
              </td>
            ) : null}
            <td style={{ backgroundColor: "#FEE5D0", width: "30vw" }}>
              {product.name}
            </td>
            <td style={{ backgroundColor: "#FEE5D0", width: "30vw" }}>
              <Link
                href={
                  product.link.includes("dmpharma")
                    ? product.link
                    : "/product/" + product.link.toLowerCase()
                }
              >
                {product.name}
              </Link>
            </td>{" "}
            <td style={{ backgroundColor: "#FEE5D0" }}>15 ml</td>
          </tr>
        );
      })}
    </>
  );
};

const DisplayList = ({ list, initialPage = 1 }) => {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isSmallerScreen);

  const all_products = [];
  Object.keys(list).map((main) => {
    Object.keys(list[main]).map((sub) => {
      list[main][sub].map((product) => {
        all_products.push(product);
      });
    });
  });

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [limit, setLimit] = useState(20);

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
    <>
      <Paper
        elevation={24}
        sx={{
          backgroundColor: "#f0f0f0",
          marginTop: 3,
          justifyContent:"center",
          alignContent:"center",
          padding:2
        }}
      >
        <Grid
          container
          sx={{fontSize: { md: 17, sm: 15, xs: 14 },
          alignSelf:"center",
          margin:"auto",
          width: { md: "800px", sm: "500", xs: "430px" },}}
        >
          <Grid item xs={1.3} sm={1.3} md={1.3}>
            {!isSmallerScreen ? (
              <button
                className={`btn ${styles.prev} ${
                  currentPage === 1 ? `disabled ${styles.disabled}` : ""
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
                <span>Prev</span>
              </button>
            ) : (
              <button
                className={`btn ${styles["button-des"]} ${
                  currentPage === 1 ? `disabled ${styles.disabled}` : ""
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Previous"
              >
                <span>{"<<"}</span>
              </button>
            )}
          </Grid>

          {array.map((value, index) => (
            <Grid item key={index} xs={1.3} sm={1.3} md={0.7}>
              {value === "..." || value === "... " ? (
                <button className={"disabled " + styles["button-des"]}>
                  {value}
                </button>
              ) : (
                <button
                  className={`${styles["button-des"]} ${
                    currentPage === value ? styles.active : null
                  } btn `}
                  onClick={() => handlePageChange(value)}
                >
                  {value}
                </button>
              )}
            </Grid>
          ))}

          <Grid item xs={1.3} sm={1.3} md={1.3}>
            {!isSmallerScreen ? (
              <button
                className={`btn ${styles.prev} ${
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
            ) : (
              <button
                className={`btn ${styles["button-des"]} ${
                  currentPage === Math.ceil(all_products.length / limit)
                    ? `disabled ${styles.disabled}`
                    : ""
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                aria-label="Next"
              >
                <span>{">>"}</span>
              </button>
            )}
          </Grid>

          <Grid
            marginTop={1}
            item
            className={styles.entries}
            xs={12}
            sm={12}
            md={4}
            textAlign={"right"}
          >
            <span className="p-2">Show</span>
            <select
              className="p-1"
              onChange={(e) => {
                setLimit(Number(e.target.value));
              }}
              value={limit}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <span className="p-2">Products</span>
          </Grid>
        </Grid>

        <Grid
          container
          justifySelf={"center"}
          margin={"auto"}
          sx={{
            width: "85vw",
            overflow: "auto",
            fontSize: { xs: "3vw", sm: "2vw", md: "17px" },
          }}
        >
          <table className="table table-bordered">
            <caption>Products</caption>
            <thead>
              <tr>
                <th
                  className="p-3"
                  style={{
                    backgroundColor: "#EF3E00",
                    color: "#fff",
                    width: "13%",
                  }}
                >
                  MAIN CATEGORY
                </th>
                <th
                  className="p-3"
                  style={{
                    backgroundColor: "#EF3E00",
                    color: "#fff",
                    width: "13%",
                  }}
                >
                  SUB CATEGORY
                </th>
                <th
                  className="p-3"
                  style={{ backgroundColor: "#EF3E00", color: "#fff" }}
                >
                  COMPOSITION
                </th>
                <th
                  className="p-3"
                  style={{ backgroundColor: "#EF3E00", color: "#fff" }}
                >
                  LINK
                </th>{" "}
                <th
                  className="p-3"
                  style={{ backgroundColor: "#EF3E00", color: "#fff" }}
                >
                  PACKING
                </th>
              </tr>
            </thead>
            <tbody style={{ borderWidth: "1px", borderColor: "#EF3E00" }}>
              {paginatedList.length ? (
                <MakeRows paginatedList={paginatedList} />
              ) : (
                <tr>
                  <td>No Products Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </Grid>
      </Paper>
    </>
  );
};

export default DisplayList;
