import "./Pagination.css";

const Pagination = ({ active, next, prev, page }) => {
  return (
    <div className="pagination">
      <ul className="pagination__container">
        <li className="pagination__container-controls" onClick={prev}>
          &#60;
        </li>

        <li
          id="0"
          className={`pagination__container-controls ${
            active === 0 ? "active" : null
          }`}
          onClick={page}
        >
          1
        </li>

        <li
          id="1"
          className={`pagination__container-controls ${
            active === 1 ? "active" : null
          }`}
          onClick={page}
        >
          2
        </li>

        <li
          id="2"
          className={`pagination__container-controls ${
            active === 2 ? "active" : null
          }`}
          onClick={page}
        >
          3
        </li>

        <li
          id="3"
          className={`pagination__container-controls ${
            active === 3 ? "active" : null
          }`}
          onClick={page}
        >
          4
        </li>

        <li
          id="4"
          className={`pagination__container-controls ${
            active === 4 ? "active" : null
          }`}
          onClick={page}
        >
          5
        </li>

        <li
          id="5"
          className={`pagination__container-controls ${
            active === 5 ? "active" : null
          }`}
          onClick={page}
        >
          6
        </li>

        <li
          id="6"
          className={`pagination__container-controls ${
            active === 6 ? "active" : null
          }`}
          onClick={page}
        >
          7
        </li>

        <li
          id="7"
          className={`pagination__container-controls ${
            active === 7 ? "active" : null
          }`}
          onClick={page}
        >
          8
        </li>

        <li
          id="8"
          className={`pagination__container-controls ${
            active === 8 ? "active" : null
          }`}
          onClick={page}
        >
          9
        </li>

        <li className="pagination__container-controls" onClick={next}>
          &#62;
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
