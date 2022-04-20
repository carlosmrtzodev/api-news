import "./Pagination.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Pagination = ({ currentPage, next, prev, page, pages }) => {
  var array = [];

  for (let i = 1; i <= 9; i++) {
    array.push(i);
  }

  return (
    <div className='pagination'>
      <ul className='pagination__container'>
        <li className='pagination__container-controls' onClick={prev}>
          <FaAngleDoubleLeft />
        </li>

        <li
          id={currentPage + 1}
          className={`pagination__container-controls ${
            currentPage === currentPage ? "active" : null
          }`}
          onClick={page}>
          {currentPage + 1}
        </li>

        <li
          id={currentPage + 2}
          className={`pagination__container-controls ${
            currentPage === currentPage ? "active" : null
          }`}
          onClick={page}>
          {currentPage + 2}
        </li>

        <li className='pagination__container-controls' onClick={next}>
          <FaAngleDoubleRight />
        </li>
      </ul>
    </div>
  );
};

export { Pagination };
