"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const DisplayList = ({ list, initialPage = 1 }) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [limit, setLimit] = useState(10);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedList = list.slice((currentPage - 1) * limit, currentPage * limit);

    return (
        <div className="container py-4 " >
            <nav>
                <ul className="pagination-sm pagination justify-content-center" >

                    <li>
                        <button className={`btn page-item ${currentPage === 1 ? 'disabled' : '' }`} onClick={() => handlePageChange(currentPage - 1)} aria-label="Previous">
                            <span aria-hidden="true">&laquo; Prev</span>
                        </button>
                    </li>

                    {[...Array(Math.ceil(list.length / limit))].map((_, index) => (
                        <li key={index + 1}>
                            <button className={`btn  page-item ${currentPage === index + 1 ? 'active' : ''} `} onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}


                    <li>
                        <button className={`btn page-item ${currentPage === Math.ceil(list.length / limit) ? 'disabled' : ''}`}onClick={() => handlePageChange(currentPage + 1)} aria-label="Next">
                            <span aria-hidden="true">Next &raquo;</span>
                        </button>
                    </li>

                    
                    <li className="justify-content-end">
                        <select className ="btn active" onChange={(e)=>{setLimit(Number(e.target.value))}}>
                            {/* <option selected>{limit}</option> */}
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </li>

                </ul>
            </nav>


            

            <div className="w-50 d-flex mx-auto justify-content-center ">
                <table className="table table-responsive">
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