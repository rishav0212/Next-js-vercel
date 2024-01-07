"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "./pagination.module.css"

const DisplayList = ({ list, initialPage = 1 }) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [limit, setLimit] = useState(10);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedList = list.slice((currentPage - 1) * limit, currentPage * limit);

    return (
        <div className="container py-4 " >
            <nav className='d-flex justify-content-center'>
                <ul className={"pagination"}>

                    <li>
                        <button className={`btn page-item ${styles.prev} ${currentPage === 1 ? `disabled ${styles.disabled}`: '' }`} onClick={() => handlePageChange(currentPage - 1)} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span>Prev</span>
                        </button>
                    </li>

                    {[...Array(Math.ceil(list.length / limit))].map((_, index) => (
                        <li key={index + 1}>
                            <button className={`${styles['button-des']} ${currentPage===index+1?styles.active:null} btn page-item `} onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}


                    <li>
                        <button className={`btn page-item ${styles.prev} ${currentPage === Math.ceil(list.length / limit) ? `disabled ${styles.disabled}` : ''}`}onClick={() => handlePageChange(currentPage + 1)} aria-label="Next">
                            <span>Next</span>
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>

                

                </ul>
                <div className={styles.entries}>
                    <span className='p-2'>Show</span>
                    <select className ="p-1" onChange={(e)=>{setLimit(Number(e.target.value))}}>
                        {/* <option selected>{limit}</option> */}
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                    <span className='p-2'>entries</span>
            </div>
            </nav>




            

            <div className="w-75 mx-auto justify-content-center table-responsive">
                <table className="table ">
                    <thead>
                        <tr>
                            <th className="p-3">S.no</th>
                            <th className="p-3">Composition</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Packing</th>
                        </tr>
                    </thead>
                    <tbody>
    
                    {paginatedList.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index+1+(currentPage-1)*limit}</td>
                            <td>
                                <Link
                                    href={"/product/" + item.name}>
                                        {item.name}
                                </Link>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                15 ml
                            </td>
                        </tr>
                    ))}
    
    
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default DisplayList;