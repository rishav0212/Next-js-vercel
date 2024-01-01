import React from 'react';
import items from '@/product_names/names';
import Link from 'next/link';


function queryResponse({params}) {

    const filtered = items.filter(item=>item.name.toLowerCase().includes(params.query.toLowerCase()))
    

    return ( 
        <div>
            <h1>Products with {params.query}</h1>
            <ul>
                {filtered.map((item)=>(
                        <Link href={"/products/" + item.name}><li key={item.id}>{item.id}   :   {item.name}</li></Link>
                    )
                    )
                }
            </ul>
        </div>
     );
}

export default queryResponse;