"use client";
import React, { use, useCallback, useEffect, useRef, useState } from "react";
import DisplayList from "@/components/QueryResponse/Pagination/DisplayList";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import items from "@/product_details/names";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Grid, Button } from "@mui/material";
import { text } from "stream/consumers";

function QueryResponse({ q = "" }) {
  const theme = useTheme();

  //////////////
  const subCategoryList = [
    "Antibiotic",
    "Anticold",
    "Analgesic & Anti-Inflammatory",
    "Antacid",
    "Dry Syrup",
    "Tonic Syrup",
    "Drops",
    "Cough Syrup",
    "Asal Sprays",
    "Intments",
    "Shampoo",
    "Lotions",
    "Roll On",
  ];

  const categories = {
    Suspensions: [
      "Antibiotic",
      "Anticold",
      "Analgesic & Anti-Inflammatory",
      "Antacid",
    ],
    Syrups: ["Dry Syrup", "Tonic Syrup", "Drops", "Cough Syrup"],
    "External Preparations": [
      "Nasal Sprays",
      "Ointments",
      "Shampoo",
      "Lotions",
      "Roll On",
    ],
    "Miscellaneous Products": [],
    Tablets: [],
    Capsules: [],
    Sachets: [],
  };

  //////////////

  const [filtered, setFiltered] = useState(items);
  const [query, setQuery] = useState("");
  const [textinProduct, setTextinProduct] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCateOptions, setSubCateOptions] = useState(subCategoryList);

  const inputMainRef = useRef(null);
  const inputSubRef = useRef(null);
  const inputRef = useRef(null);

  ///////////////////

  const handleSelectionMain = (e, value) => {
    value ? setMainCategory(value) : setMainCategory("");
    inputMainRef.current ? inputMainRef.current.blur() : null;
  };

  const handleSelectionSub = (e, value) => {
    value ? setSubCategory(value) : setSubCategory("");
    inputSubRef.current ? inputSubRef.current.blur() : null;
  };

  ////////////////
  const handleSelection = (e, value) => {
    if (value) {
      setQuery(value);
      setTextinProduct(value);
    } else {
      setQuery("");
      setTextinProduct("");
    }

    inputRef.current ? inputRef.current.blur() : null;
  };

  ///////////////

  const handleEnterPressed = (e) => {
    if (e.key === "Enter") {
      setQuery(textinProduct);
      inputRef.current ? inputRef.current.blur() : null;
    }
  };

  /////////////

  const handleChangedMain = useCallback(() => {
    if (mainCategory !== "") {
      setSubCateOptions(categories[mainCategory]);
    } else {
      setSubCateOptions(subCategoryList);
    }
    setSubCategory("");
  }, [mainCategory, setMainCategory]);

  useEffect(handleChangedMain, [
    handleChangedMain,
    mainCategory,
    setMainCategory,
  ]);

  //////////////

  const handleChangedSub = useCallback(() => {}, [subCategory, setSubCategory]);

  useEffect(handleChangedSub, [handleChangedSub, subCategory, setSubCategory]);

  //////////
  useEffect(() => {
    for (const key in categories) {
      if (q === key) {
        setMainCategory(key);
        break;
      }
    }
  }, []);

  // const handleChangedQuery = useCallback(

  useEffect(() => {
    const new_list = items.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) &&
        item.mainCategory.includes(mainCategory) &&
        item.subCategory.includes(subCategory)
    );
    setFiltered((prev) => new_list);
  }, [
    query,
    mainCategory,
    subCategory,
    setMainCategory,
    setSubCategory,
    setQuery,
  ]);

  return (
    <>
      <Grid
        container
        spacing={2}
        margin={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          container
          item
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{ width: { md: "80vw", sm: "80vw", xs: "90vw" } }}
        >
          <Grid item xs={12} sm={6} md={12} justifyContent={"center"}>
            <Typography variant="h4" className="color-primary text-center">
              PRODUCTS
            </Typography>
          </Grid>
          <Grid item xs={11} sm={6} md={3} sx={{ fontSize: "1vh" }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={items.map((item) => item.name)}
              // sx={{ width: 200 }}
              // isOptionEqualToValue={isOptionEqualToValue}

              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search by Composition"
                  onKeyPress={handleEnterPressed}
                  inputRef={inputRef}
                />
              )}
              // value={query}
              onInputChange={(e, value) => setTextinProduct(value)}
              value={textinProduct === "" ? null : textinProduct}
              onChange={handleSelection}
            />
          </Grid>
          <Grid item xs={11} sm={6} md={3}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={Object.keys(categories)}
              // sx={{ width: 200 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search by Main Category"
                  inputRef={inputMainRef}
                />
              )}
              onChange={handleSelectionMain}
              value={mainCategory === "" ? null : mainCategory}
            />
          </Grid>
          <Grid item xs={11} sm={6} md={3}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={subCateOptions}
              // sx={{ width: 200 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search by Sub Category"
                  inputRef={inputSubRef}
                />
              )}
              onChange={handleSelectionSub}
              value={subCategory === "" ? null : subCategory}
            />
          </Grid>
          <Grid margin={0} md={9} sm={12} xs={11} textAlign={"right"}>
            <Button
              sx={{}}
              onClick={() => {
                setTextinProduct("");
                setMainCategory("");
              }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={10}
          sx={{
            width: { md: "80vw", sm: "80vw", xs: "90vw" },
            fontSize: { md: "1.2vw", sm: "1.7vw", xs: "2.5vw" },
          }}
        >
          <DisplayList list={filtered} />
        </Grid>
      </Grid>
    </>
  );
}

export default QueryResponse;
