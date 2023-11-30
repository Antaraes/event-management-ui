import { useState } from "react";
import Card from "./Card"
import { InlineIcon } from "@iconify/react";

export default function CardList({
  page,
  setPage,
  pageCount,
  data,
  link
}) {

  const itemsPerPage = parseInt(pageCount);

  const handlePageChange = (value) => {
    if (value > 0 && pageCount >= value) {
      setPage(value)
    }
  }

  return (
    <section>
      <section className="grid grid-cols-2 sm:grid-cols-3 justify-center">
        {
          data?.map((d,index) => {
            return (<Card data={d} link={`${link + d._id}`} key={index}/>)
          })
        }
      </section>

      <div className="w-[80%] flex justify-center items-center gap-2 mx-auto mt-5">
        <button onClick={() => handlePageChange(page - 1)}>
          <InlineIcon icon="ion:arrow-left-b" className="text-[2.5rem] text-gray-400 hover:text-white"/>
        </button>
        {itemsPerPage <= 9 && Array.from({ length: itemsPerPage }, (_, index) => (
          <span onClick={() => handlePageChange(index + 1)} className={`w-[40px] h-[40px] p-2 ${page === index + 1 ? 'bg-secondary text-white' : 'bg-white text-black'} text-center text-lg font-medium rounded-[50%] shadow-md`} key={index + 1}>{index + 1}</span>
        ))}
        <button onClick={() => handlePageChange(page + 1)} >
          <InlineIcon icon="ion:arrow-right-b" className="text-[2.5rem] text-gray-400 hover:text-white"/>
        </button>
      </div>
    </section>
  )
}
