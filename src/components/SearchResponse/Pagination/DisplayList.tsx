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
              <td rowSpan={numberOfProductsMain[prevMainIndex]}>
                {product.mainCategory}
              </td>
            ) : null}
            {product.subCategory !== prevSub ? (
              <td rowSpan={numberOfProductsSub[prevSubIndex]}>
                {product.subCategory}
              </td>
            ) : null}
            <td className={styles.rowHover}>{product.name}</td>
            <td className={styles.rowHover}>
              <Link
                href={
                  product.link.includes("dmpharma")
                    ? product.link
                    : "/product/" + product.link.toLowerCase()
                }
              >
                {product.name}
              </Link>
            </td>
            <td className={styles.rowHover}> 15 ml</td>
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
  useEffect(()=>{
    setCurrentPage(1)
  },[list])

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
          marginTop: 1,
          justifyContent: "center",
          alignContent: "center",
          padding: 2,
        }}
      >
        <Grid
          container
          spacing={"0.3vh"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid item>
            {!isSmallerScreen ? (
              <button
                className={`${styles.prev} ${
                  currentPage === 1 ? ` ${styles.disabled}` : ""
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
                <span>Prev</span>
              </button>
            ) : (
              <button
                className={` ${styles["button-des"]} ${
                  currentPage === 1 ? ` ${styles.disabled}` : ""
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Previous"
              >
                <span>{"<<"}</span>
              </button>
            )}
          </Grid>

          {array.map((value, index) => (
            <Grid item key={index}>
              {value === "..." || value === "... " ? (
                <button className={styles["button-des"]}>{value}</button>
              ) : (
                <button
                  className={`${styles["button-des"]} ${
                    currentPage === value ? styles.active : null
                  } `}
                  onClick={() => handlePageChange(value)}
                >
                  {value}
                </button>
              )}
            </Grid>
          ))}

          <Grid item>
            {!isSmallerScreen ? (
              <button
                className={` ${styles.prev} ${
                  currentPage === Math.ceil(all_products.length / limit)
                    ? `${styles.disabled}`
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
                className={` ${styles["button-des"]} ${
                  currentPage === Math.ceil(all_products.length / limit)
                    ? `${styles.disabled}`
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
            item
            md={5}
            sm={4.5}
            xs={11}
            marginY={1}
            className={styles.entries}
            textAlign={"right"}
            alignSelf={"center"}
            justifyContent={"right"}
          >
            <span className="p-2">Show</span>
            <select
              className="p-1"
              onChange={(e) => {
                setLimit(Number(e.target.value));
              }}
              value={limit}
              style={{ borderRadius: 5 }}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>
            <span className="p-2">Products</span>
          </Grid>
        </Grid>

        <Grid
          container
          justifySelf={"center"}
          margin={"auto"}
          sx={{
            height: "85vh",
            width: "85vw",
            overflow: "auto",
            border: "1px solid #ef3e00",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #ffdcc0 -10%, #ef3e00 200%)",
          }}
        >
          <table className={styles.tableStyle}>
            <caption>Products</caption>
            <thead>
              <tr>
                <th>MAIN CATEGORY</th>
                <th>SUB CATEGORY</th>
                <th>COMPOSITION</th>
                <th>LINK</th>
                <th>PACKING</th>
              </tr>
            </thead>
            <tbody>
              {paginatedList.length ? (
                <MakeRows paginatedList={paginatedList} />
              ) : (
                <tr>
                  <td colSpan={5} rowSpan={10} style={{textAlign:"center"}}>No Products Found</td>
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
