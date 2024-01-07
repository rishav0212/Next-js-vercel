"use client"
import React, { use, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import DisplayList from "@/components/Pagination/DisplayList";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";
import items from "@/product_details/names";
import Search from "@/components/Navbar/Search";
import { margin } from "@mui/system";


function QueryResponse({ params }) {

  let query = params.query;

  //////////////
  const subCategoryList = [
    'Anitbiotic', 'Anticold', 'Analgesic & Anti-Inflammatory', 'Antacid',
    'Dry Syrup', 'Tonic Syrup', 'Drops', 'Cough Syrup',
    'Asal Sprays', 'Intments', 'Shampoo', 'Lotions', 'Roll On'
  ]

  const categories = {
    'Suspensions': ['Anitbiotic', 'Anticold', 'Analgesic & Anti-Inflammatory', 'Antacid'],
    'Syrups': ['Dry Syrup', 'Tonic Syrup', 'Drops', 'Cough Syrup'],
    'External Preparations': ['Asal Sprays', 'Intments', 'Shampoo', 'Lotions', 'Roll On'],
    'Miscellaneous Products': [],
    'Tablets': [],
    'Capsules': [],
    'Sachets': []
  }

  const links ={
    'Suspensions' : "suspensions",
    'Syrups' : "syrups",
    'External Preparation' : "external",
    'Miscellaneous Products' : "misc",
    'Tablets' : "tablets",
    'Capsules': "capsules",
    'Sachets' : "sachets"
  }

  //////////////

  const [sublist, setSublist] = useState([])
  const inputMainRef = useRef(null)
  const inputSubRef = useRef(null)
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


  ///////////////

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
    handleChangedMain, [mainCategory, setMainCategory]
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
    handleChangedSub, [subCategory, setSubCategory]
  )

  ///////////
  // boolean "main" to check if clicked on category from navbar
  let main = false;    
  let filtered = []
  const [list, setList] = useState([])
  useEffect(()=>{
    for (const key in links){
      if(query === links[key]){
        setMainCategory(key)
        main = true;
        break
      }
    }
    filtered = !main ? items.filter((item) =>
      item.name.toLowerCase().includes(params.query.toLowerCase())
    ) : items;
    setList(filtered)
  },[query])


  return (
    <>
      <div className="d-flex pt-4 justify-content-center">
        <Search query={!main?"":query}/>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Object.keys(categories)}
          sx={{ width: 200}}

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

      <DisplayList list={subCategory===""?list:sublist} />
    </>
  );
}

export default QueryResponse;