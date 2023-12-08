import React from 'react'
import { InlineIcon } from '@iconify/react';

export default function PaginationServerSide(
  {page,
  setPage,
  pageCount,}
) {

    console.log(pageCount);

    const itemsPerPage = pageCount;

    const handlePageChange = (value) => {
        if (value > 0 && pageCount >= value) {
        setPage(value)
        }
    }

    console.log("itemsPerPage",itemsPerPage);

  return (
    <div className="w-[80%] flex justify-center items-center gap-2 mx-auto my-5">
        <button onClick={() => handlePageChange(page - 1)}>
          <InlineIcon icon="ion:arrow-left-b" className="text-[2.5rem] text-gray-400 hover:text-white"/>
        </button>
        {itemsPerPage <= 9 && Array.from({ length: itemsPerPage }, (_, index) => (
          <span onClick={() => handlePageChange(index + 1)} className={`w-[40px] h-[40px] p-2 ${page === index + 1 ? 'bg-secondary text-white' : 'bg-white text-black'} text-center text-lg font-medium rounded-[50%] shadow-md cursor-pointer`} key={index + 1}>{index + 1}</span>
        ))}
        <button onClick={() => handlePageChange(page + 1)} >
          <InlineIcon icon="ion:arrow-right-b" className="text-[2.5rem] text-gray-400 hover:text-white"/>
        </button>
    </div>
  )
}
