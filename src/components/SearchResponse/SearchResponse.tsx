"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import DisplayList from "@/components/SearchResponse/Pagination/DisplayList";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import items from "@/product_details/names";
import { Typography } from "@mui/material";
import { Grid, Button, Paper } from "@mui/material";

function SearchResponse({ q = "" }) {
  //////////////

  /////////////
  const allProducts = [];
  Object.keys(items).map((main) => {
    Object.keys(items[main]).map((sub) => {
      items[main][sub].map((product) => {
        allProducts.push(product.name);
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
    "Ointments",
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
    if (
      e.key === "Enter" ||
      e.key === "Return" ||
      e.keyCode === 13 ||
      e.which === 13
    ) {
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
    <Paper
      sx={{
        position: "relative",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        position={"relative"}
      >
        <img
          src={"/images/banner3.jpg"}
          alt="Recode7"
          style={{
            width: "100%",
            height: "50vh",
            objectFit: "cover",
          }}
        />
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          md={10}
          sm={8}
          xs={8}
          position={"absolute"}
        >
          <Grid item xs={12} sm={12} md={12} justifyContent="center">
            <Typography
              variant="h3"
              sx={{
                color: "var(--primary-color)",
                fontWeight: "bold",
                textShadow: "2px 4px 3px rgba(0, 0, 0, 0.9)",
                marginBottom: 4,
                fontSize: "5em",
                textAlign: "center",
                "&:hover": {
                  textShadow: "2px 5px 4px rgba(0, 0, 0, 1)",
                },
              }}
            >
              PRODUCTS
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            sx={{ fontSize: "1vh", padding: 0.5 }}
          >
            <Autocomplete
              disablePortal
              id="Composition"
              options={allProducts}
              sx={{ ...autocompleteStyles }}
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
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ fontSize: "1vh", padding: 0.5 }}
          >
            <Autocomplete
              disablePortal
              id="mainCategory"
              options={Object.keys(categories)}
              sx={{ ...autocompleteStyles }}
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
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ fontSize: "1vh", padding: 0.5 }}
          >
            <Autocomplete
              disablePortal
              id="subCategory"
              options={subCateOptions}
              sx={{ ...autocompleteStyles }}
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
          <Grid item margin={0} md={9} sm={12} xs={12} textAlign="right">
            <Button
              onClick={() => {
                setTextinProduct("");
                setQuery("");
                setSubCategory("");
                setMainCategory("");
              }}
              sx={{ color: "blue" }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <DisplayList list={filtered} />
    </Paper>
  );
}

const autocompleteStyles = {
  "& .MuiInputBase-root": {
    backgroundColor: "rgba(255,255,255, 1)", // White background for contrast
    borderRadius: "12px",
    border: "1px solid #000",
    boxShadow: "6px 8px 8px rgba(0, 0, 0, 0.7)",
    "&:hover": {
      border: "none",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#555",
  },
  "& .MuiAutocomplete-inputRoot": {
    borderRadius: "12px",
    padding: "8px",
    border: "none",
  },
  "& .MuiAutocomplete-popupIndicator": {
    color: "var(--primary-color)",
  },
  "& .MuiMenuItem-root": {
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
};

export default SearchResponse;
