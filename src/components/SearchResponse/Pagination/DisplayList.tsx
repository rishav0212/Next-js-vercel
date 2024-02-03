"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import styles from "./pagination.module.css";
import paginationRange from "@/utils/appUtils";
import { Popover, Grid, useMediaQuery, Paper } from "@mui/material";
import { color, fontSize, useTheme } from "@mui/system";

const MakeRows = ({ paginatedList }) => {
  //FUNCTION TO MAKE ROWS CATEGORY BY COUNTING PRODUCTS IN MAIN CATEGORY AND SUB CATEGORY

  const [hoveredLink, setHoveredLink] = useState(null);

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
            <td
              className={`${styles.rowHover} ${
                index % 2 === 0 ? styles.evenRow : styles.oddRow
              }`}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {product.linkAvailable ? (
                <Link
                  href={
                    product.link.includes("dmpharma")
                      ? product.link
                      : "/product/" + product.link.toLowerCase()
                  }
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {product.name}{" "}
                  <img
                    width={20}
                    height={20}
                    src={"/images/icons/info-64px.png"}
                    alt={"Product Information"}
                  />
                  {hoveredLink === index && (
                    <span className={styles.customPopover}>Learn more</span>
                  )}
                </Link>
              ) : (
                product["name"]
              )}
            </td>
            <td
              className={`${styles.rowHover} ${
                index % 2 === 0 ? styles.evenRow : styles.oddRow
              }`}
            >
              {product["packing"]}
            </td>
            {product.subCategory !== prevSub ? (
              <td
                rowSpan={numberOfProductsSub[prevSubIndex]}
                className={styles.category}
              >
                {product.subCategory}
              </td>
            ) : null}
            {product.mainCategory !== prevMain ? (
              <td
                rowSpan={numberOfProductsMain[prevMainIndex]}
                className={styles.category}
              >
                {product.mainCategory}
              </td>
            ) : null}
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
  useEffect(() => {
    setCurrentPage(1);
  }, [list, limit]);

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
          justifySelf={"center"}
          margin={"auto"}
          sx={{
            // height: "100%",
            width: "85vw",
            overflow: "auto",
            border: "1px solid #3fc0a9",
            borderRadius: "10px",
          }}
        >
          <table className={styles.tableStyle}>
            <caption>Products</caption>
            <thead>
              <tr>
                <th style={{ width: "66vw" }}>COMPOSITION</th>
                <th style={{ width: "10vw" }}>PACKING</th>
                <th style={{ width: "12vw" }}>SUB CATEGORY</th>
                <th style={{ width: "12vw" }}>MAIN CATEGORY</th>
              </tr>
            </thead>
            <tbody>
              {paginatedList.length ? (
                <MakeRows paginatedList={paginatedList} />
              ) : (
                <tr>
                  <td colSpan={5} rowSpan={10} style={{ textAlign: "center" }}>
                    No Products Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Grid>
        <Grid
          container
          spacing={"0.3vh"}
          justifyContent={"center"}
          alignContent={"center"}
          position={"sticky"}
          zIndex={1}
          sx={{
            background: "#f0f0f0",
            top: { md: "9.3vh", sm: "9.3vh", xs: "6.3vh" },
          }}
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
      </Paper>
    </>
  );
};

export default DisplayList;
