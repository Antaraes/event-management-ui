import { useState } from "react";
import ReactPaginate from 'react-paginate';
import Card from "./Card"

export default function CardList({ data }) {

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;

  const startIndex = currentPage * itemsPerPage;
  const endPage = currentPage + itemsPerPage;

  const currentData = data.slice(startIndex, endPage);

  const handlePageChange = (selected) => {
    setCurrentPage(selected)
  }

  return (
    <section>
      <section className="grid grid-cols-3 justify-center">
        {
          data.map((d,index) => {
            return (<Card data={d} key={index}/>)
          })
        }
      </section>

      <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={Math.ceil(data.length / itemsPerPage)}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName={'pagination custom-pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
    </section>
  )
}
