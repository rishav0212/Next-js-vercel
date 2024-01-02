"use client";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";

function Search() {
  const [text, setText] = useState("");
  const router = useRouter();

  const addQuery = () => {
    router.push("/products/" + text);
  };

  ///// with useEffect page is rendred everytime when we add a leeter in search

  useEffect(() => {
    if (text.length >= 1) {
      addQuery();
    }
  }, [text, addQuery]);

  ////

  return (
    <>
      {/* <Tooltip title="Search Product" placement='top'>
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </Tooltip> */}
      <input
        type="text"
        placeholder="Search Product . . . "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addQuery()}>Search</button>
    </>
  );
}

export default Search;
