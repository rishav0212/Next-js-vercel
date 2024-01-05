"use client";
import React, { useEffect, useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import  Autocomplete  from "@mui/material/Autocomplete";
import items from "@/product_details/names";


function Search() {
  const [text, setText] = useState("");
  const router = useRouter();  
  
  const inputRef = useRef(null);



  const addQuery = () => {
    console.log(text)

    router.push("/products/" + text);
    if (inputRef.current) {
      inputRef.current.blur();
    }
    setText('')
  };

  const handleSelection = (e, value)=>{
    // setText(value)    
    if(value===null){
      return
    }
    router.push("/product/" + value);
    if (inputRef.current) {
      inputRef.current.blur();
    }
    setText('')

  }

  // const isOptionEqualToValue = (option, value) => option===value||value!=='';


  return (
    <>
      
      <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={items.map((item)=>(item.name))}
          sx={{ width: 200}}
          // isOptionEqualToValue={isOptionEqualToValue}
          
          renderInput={(params) => <TextField {...params} label="Search Product"
          onKeyPress={(e)=>{if (e.key==="Enter") addQuery()}}
          inputRef={inputRef}
        />}
        // value={text}
        onInputChange={(e, value)=>setText(value)}
        value = {text===""?null:text}
        onChange={handleSelection}

      />
    </>
  );
}

export default Search;
