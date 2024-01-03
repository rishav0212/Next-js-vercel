"use client";
import React, { useEffect, useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { Autocomplete } from "@mui/lab";
import items from "@/product_names/names";


function Search() {
  const [text, setText] = useState("");
  const router = useRouter();  
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  
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
    router.push("/products/" + value);
    if (inputRef.current) {
      inputRef.current.blur();
    }
    setText('')

  }

  return (
    <>
      
      <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={items.map((item)=>(item.name))}
          sx={{ width: 200}}
          
          renderInput={(params) => <TextField {...params} label="Search Product..."
          onKeyPress={(e)=>{if (e.key==="Enter") addQuery()}}
          inputRef={inputRef}
        />}
        // value={text}
        onInputChange={(e, value)=>setText(value)}
        value = {text}
        onChange={handleSelection}
                
      />
    </>
  );
}

export default Search;
