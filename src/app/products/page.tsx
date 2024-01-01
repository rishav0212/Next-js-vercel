import items from '@/product_names/names'
import Link from 'next/link';
import React from 'react';


function Products() {


    return (

        <div >
            <h1>Products</h1>
            <ul>
                
                {items.map(dataitem =>(
                    <div style={{alignContent : "center" }}>
                        <li><Link href = {"/products/" + dataitem.name}>{dataitem.id} -   {dataitem.name}</Link></li>
                    </div>
                ))}
            </ul>
        </div>
     );
}

export default Products;