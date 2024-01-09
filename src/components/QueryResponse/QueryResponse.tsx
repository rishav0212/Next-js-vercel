"use client"
import React, { use, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import DisplayList from "@/components/QueryResponse/Pagination/DisplayList";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";
import items from "@/product_details/names";
import Search from "@/components/Navbar/Search";
import { ThreeSixty } from "@mui/icons-material";

function QueryResponse({ q = "" }) {

  //////////////
  const subCategoryList = [
    'Antibiotic', 'Anticold', 'Analgesic & Anti-Inflammatory', 'Antacid',
    'Dry Syrup', 'Tonic Syrup', 'Drops', 'Cough Syrup',
    'Asal Sprays', 'Intments', 'Shampoo', 'Lotions', 'Roll On'
  ]

  const categories = {
    'Suspensions': ['Antibiotic', 'Anticold', 'Analgesic & Anti-Inflammatory', 'Antacid'],
    'Syrups': ['Dry Syrup', 'Tonic Syrup', 'Drops', 'Cough Syrup'],
    'External Preparations': ['Nasal Sprays', 'Ointments', 'Shampoo', 'Lotions', 'Roll On'],
    'Miscellaneous Products': [],
    'Tablets': [],
    'Capsules': [],
    'Sachets': []
  }

  const links = {
    'Suspensions': "suspensions",
    'Syrups': "syrups",
    'External Preparation': "external",
    'Miscellaneous Products': "misc",
    'Tablets': "tablets",
    'Capsules': "capsules",
    'Sachets': "sachets"
  }

  //////////////

  const [filtered, setFiltered] = useState(items);
  const [sublist, setSublist] = useState([])
  const [list, setList] = useState([])
  const [query, setQuery] = useState("");
  const [textinProduct, setTextinProduct] = useState("")
  const inputMainRef = useRef(null)
  const inputSubRef = useRef(null)
  const inputRef = useRef(null)
  const [mainCategory, setMainCategory] = useState("")
  const [subCategory, setSubCategory] = useState("")
  const [subCateOptions, setSubCateOptions] = useState(subCategoryList)



  ///////////////////


  const handleSelectionMain = (e, value) => {
    value ? setMainCategory(value) : setMainCategory("")
    inputMainRef.current ? inputMainRef.current.blur() : null
  }

  const handleSelectionSub = (e, value) => {
    value ? setSubCategory(value) : setSubCategory("")
    inputSubRef.current ? inputSubRef.current.blur() : null
  }

  ////////////////
  const handleSelection = ((e, value) => {
    if(value){
      setQuery(value)
      setTextinProduct(value)
    } else{
      setQuery("")
      setTextinProduct("")
    }

    inputRef.current ? inputRef.current.blur() : null

  })

  ///////////////

  const handleEnterPressed = (e) => {
    if (e.key === "Enter") {

      setQuery(textinProduct)
      inputRef.current ? inputRef.current.blur() : null
    }
  }


  /////////////

  const handleChangedMain = useCallback(() => {
    if (mainCategory !== "") {
      const new_list = filtered.filter((item) =>
        item['mainCategory'].toLowerCase() === mainCategory.toLowerCase()
      )
      setSubCateOptions(categories[mainCategory])
      setList(new_list)
    } else {
      setSubCateOptions(subCategoryList)
      setList(filtered)
    }
    setSubCategory("")
  }, [mainCategory, setMainCategory])

  useEffect(
    handleChangedMain, [handleChangedMain, mainCategory, setMainCategory]
  )

  //////////////

  const handleChangedSub = useCallback(() => {
    if (subCategory !== "") {
      const new_list = list.filter((item) =>
        item['subCategory'] === subCategory
      )
      setSublist(new_list)
    }
  }, [subCategory, setSubCategory])

  useEffect(
    handleChangedSub, [handleChangedSub, subCategory, setSubCategory]
  )

  //////////
  useEffect(() => {
    for (const key in links) {
      if (q === key) {
        setMainCategory(key)

        break;
      }

    }
  }, [])

  const handleChangedQuery = useCallback(() => {
    if (query !== "") {
      const new_list = items.filter((item) => (
        item.name.toLowerCase().includes(query.toLowerCase())
      ))
      setFiltered(new_list)
    } else {
      setFiltered(items)
    }
    setMainCategory("")
  }, [query, setQuery])

  useEffect(() =>
    handleChangedQuery, [query, setQuery]
  )



  return (
    <>
      <div className="d-flex pt-4 justify-content-center">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={items.map((item) => (item.name))}
          sx={{ width: 200 }}
          // isOptionEqualToValue={isOptionEqualToValue}

          renderInput={(params) => <TextField {...params} label="Search Product"
            onKeyPress={handleEnterPressed}
            inputRef={inputRef}
          />}
          // value={query}
          onInputChange={(e, value) => setTextinProduct(value)}
          value={textinProduct === "" ? null : textinProduct}
          onChange={handleSelection}

        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Object.keys(categories)}
          sx={{ width: 200 }}

          renderInput={(params) => <TextField {...params} label="Main Category"
            inputRef={inputMainRef}
          />}

          onChange={handleSelectionMain}
          value={mainCategory === "" ? null : mainCategory}

        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={subCateOptions}
          sx={{ width: 200 }}

          renderInput={(params) => <TextField {...params} label="Sub Category"
            inputRef={inputSubRef}
          />}

          onChange={handleSelectionSub}
          value={subCategory === "" ? null : subCategory}

        />
      </div>

      <DisplayList list={subCategory === "" ? mainCategory === "" ? filtered : list : sublist} />
    </>
  );
}

export default QueryResponse;