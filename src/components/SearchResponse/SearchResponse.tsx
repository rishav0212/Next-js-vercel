"use client";
import React, { use, useCallback, useEffect, useRef, useState } from "react";
import DisplayList from "@/components/SearchResponse/Pagination/DisplayList";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import items from "@/product_details/names";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Grid, Button, Paper } from "@mui/material";

function SearchResponse({ q = "" }) {
  const theme = useTheme();

  //////////////

  /////////////
  const all_products = [];
  Object.keys(items).map((main) => {
    Object.keys(items[main]).map((sub) => {
      items[main][sub].map((product) => {
        all_products.push(product.name);
      });
    });
  });

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

  const [filtered, setFiltered] = useState({});
  const [query, setQuery] = useState("");
  const [textinProduct, setTextinProduct] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCateOptions, setSubCateOptions] = useState(subCategoryList);

  const inputMainRef = useRef(null);
  const inputSubRef = useRef(null);
  const inputRef = useRef(null);

  ///////////////////

  useEffect(() => {
    setFiltered(items);
  }, []);

  useEffect(() => {
    for (const key in categories) {
      if (q === key) {
        setMainCategory(key);
        break;
      }
    }
  }, []);

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

  useEffect(handleChangedMain, [handleChangedMain, mainCategory]);

  //////////////

  const handleChangedSub = useCallback(() => {}, [subCategory, setSubCategory]);

  useEffect(handleChangedSub, [handleChangedSub, subCategory, setSubCategory]);
  /////////

  useEffect(() => {
    let new_list = {};
    Object.keys(items).map((main, index) => {
      let sub_list = {};
      if (mainCategory === main || mainCategory === "") {
        Object.keys(items[main]).map((sub) => {
          if (subCategory === sub || subCategory === "") {
            const inner_search = items[main][sub].filter((product) =>
              product.name.toLowerCase().includes(query.toLowerCase())
            );
            inner_search.length ? (sub_list[sub] = inner_search) : null;
          }
        });
      }

      Object.keys(sub_list).length ? (new_list[main] = sub_list) : null;
    });
    setFiltered(new_list);
  }, [query, mainCategory, subCategory]);

  //////////

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
          sx={{ width: { md: "80vw", sm: "80vw", xs: "85vw" } }}
        >
          <Grid item xs={12} sm={12} md={12} justifyContent={"center"}>
            <Typography variant="h4" className="color-primary text-center">
              PRODUCTS
            </Typography>
          </Grid>
          <Grid item xs={11} sm={12} md={3} sx={{ fontSize: "1vh" }}>
            <Autocomplete
              disablePortal
              id="Composition"
              options={all_products}
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                },
                "& .MuiInputLabel-root": {
                  color: "#333",
                },
                "& .MuiAutocomplete-inputRoot": {
                  borderRadius: "8px",
                  padding: "8px",
                },
                "& .MuiAutocomplete-popupIndicator": {
                  color: "#EF3E00",
                },
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search by Composition"
                  onKeyPress={handleEnterPressed}
                  inputRef={inputRef}
                />
              )}
              onInputChange={(e, value) => setTextinProduct(value)}
              value={textinProduct === "" ? null : textinProduct}
              onChange={handleSelection}
            />
          </Grid>
          <Grid item xs={11} sm={6} md={3}>
            <Autocomplete
              disablePortal
              id="mainCategory"
              options={Object.keys(categories)}
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                },
                "& .MuiInputLabel-root": {
                  color: "#333",
                },
                "& .MuiAutocomplete-inputRoot": {
                  borderRadius: "8px",
                  padding: "8px",
                },
                "& .MuiAutocomplete-popupIndicator": {
                  color: "#EF3E00",
                },
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                },
              }}
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
              id="subCategory"
              options={subCateOptions}
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                },
                "& .MuiInputLabel-root": {
                  color: "#333",
                },
                "& .MuiAutocomplete-inputRoot": {
                  borderRadius: "8px",
                  padding: "8px",
                },
                "& .MuiAutocomplete-popupIndicator": {
                  color: "#EF3E00",
                },
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                },
              }}
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
          <Grid item margin={0} md={9} sm={12} xs={11} textAlign={"right"}>
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

        <DisplayList list={filtered} />
      </Grid>
    </>
  );
}

export default SearchResponse;
