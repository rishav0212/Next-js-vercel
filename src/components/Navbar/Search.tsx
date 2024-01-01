"use client"
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {IconButton, Tooltip} from '@mui/material'
import { useRouter } from 'next/navigation';

function Search() {
    const [text, setText] = useState('')
    const router = useRouter()


    const handleSubmit = ()=>{
        router.push("/products/" + text)
    }

    ///// with unseeffect page is rendred everytime when we add a leeter in search

    useEffect(
        handleSubmit,
        [text, handleSubmit])

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
                placeholder='Search Product . . . '
                value={text}
                onChange={(e)=> setText(e.target.value)}
            />
            <button onClick={()=>handleSubmit()}>Search</button>
        </>
     );
}

export default Search;