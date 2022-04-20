import { useState, useEffect } from "react";

const useNews = () => {
  const [page, setPage] = useState(0);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numberPages, setNumberPages] = useState(0);
  const item = localStorage.getItem("selectedOption");
  const [numberElements, setNumberElements] = useState(0);
  const [option, setOption] = useState(item === null ? "angular" : item);

  useEffect(() => {
    fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${option}&page=${page}`
    )
      .then((response) => response.json())
      .then(
        (data) => {
          setLoading(true);
          setNumberPages(data.nbPages);
          setNumberElements(data.nbHits);
          setArticles(data.hits);
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      );
  }, [option, page, numberPages, numberElements]);

  const handleChange = (value) => {
    localStorage.setItem("selectedOption", value);
    setOption(localStorage.getItem("selectedOption"));
    setPage(0);
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(0);
    }
  };

  const handleNext = () => {
    if (page < 8) {
      setPage(page + 1);
    } else {
      setPage(8);
    }
  };

  const handlePage = (e) => {
    setPage(Number(e.target.id) - 1);
  };

  return {
    item,
    page,
    error,
    option,
    loading,
    articles,
    handlePrev,
    handlePage,
    handleNext,
    numberPages,
    handleChange,
    numberElements,
  };
};

export { useNews };
