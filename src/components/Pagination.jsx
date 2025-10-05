const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="flex gap-2 mt-4 justify-center">
      <button 
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span className="px-3 py-1">{currentPage} / {totalPages}</span>
      <button 
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
