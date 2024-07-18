import Link from "next/link";

const Pagination = ({
  totalProducts,
  resultsPerPage,
  currentPage,
  paginate,
  nextPage,
  prevPage,
}: {
  totalProducts: number;
  resultsPerPage: number;
  currentPage: number;
  paginate: (page: number) => void;
  prevPage: (page: number) => void;
  nextPage: (page: number, page2: number) => void;
}) => {
  const noOfPages = Math.ceil(totalProducts / resultsPerPage);
  const pageNumbers = [];

  for (let index = 1; index <= noOfPages; index++) {
    pageNumbers.push(index);
  }

  return (
    <nav className="text-center">
      <ul className="inline-flex -space-x-p text-base h-10 mt-5">
        <li>
          <Link
            href={"javascript:void(0)"}
            onClick={() => prevPage(currentPage)}
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-[#bdbdbd] rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </Link>
        </li>

        {pageNumbers.map((page) => (
          <li key={page}>
            <Link
              href={"javascript:void(0)"}
              onClick={() => paginate(page)}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-e-0 border-[#bdbdbd] hover:bg-gray-100 hover:text-gray-700"
            >
              {page}
            </Link>
          </li>
        ))}

        <li>
          <Link
            href={"javascript:void(0)"}
            onClick={() => nextPage(currentPage, noOfPages)}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-[#bdbdbd] rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
