import ReactPaginate from 'react-paginate';

export default Pagination = ({data}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;

  const startIndex = currentPage * itemsPerPage;
  const endPage = currentPage + itemsPerPage;

  const currentData = data.slice(startIndex, endPage);

  const handlePageChange = (selected) => {
    setCurrentPage(selected)
  }

  return (
    <div>
      {/* Display content for the current page */}
      {currentData.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={`Image for page ${item.id}`} />
          <p>{item.content}</p>
        </div>
      ))}

      {/* Pagination component */}
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};