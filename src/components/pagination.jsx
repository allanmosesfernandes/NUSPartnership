import { Link } from "gatsby";
import React from "react";

function Pagination({ totalPages, postsPerPage, currentPage, base }) {
  // Destructure props
  // Calculate total pages
  console.log(totalPages);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasPrevPage = prevPage > 0;
  const hasNextPage = nextPage <= totalPages;

  return (
    <div className="font-bold flex gap-4 w-full mx-auto justify-center items-center">
      {/* Previous */}
      <Link
        disabled={!hasPrevPage}
        to={`${base}/${currentPage - 1}`}
        className="btn btn-primary"
      >
        ← Prev
      </Link>
      {/* Page Numbers */}
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link
          disabled={!hasNextPage}
          key={index}
          to={`${base}/${index + 1}`}
          className={`btn btn-primary ${
            currentPage === index + 1 ? "bg-gray-400 " : ""
          }`}
        >
          {index + 1}
        </Link>
      ))}
      {/* Next */}
      <Link
        disabled={!hasNextPage}
        to={`${base}/${currentPage + 1}`}
        className="btn btn-primary"
      >
        Next →
      </Link>
    </div>
  );
}

export default Pagination;
