import { useState, useEffect } from "react";
import Nav from "../components/elements/Nav";
import News from "../components/elements/News";
import Error from "../components/elements/Error";
import Grid from "../components/containers/Grid";
import Header from "../components/elements/Header";
import Loading from "../components/elements/Loading";
import Options from "../components/elements/Options";
import Container from "../components/containers/Container";
import Pagination from "../components/elements/Pagination";

//Home Page.
const Home = () => {
  const item = localStorage.getItem("selectedOption");
  const [page, setPage] = useState(0);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [option, setOption] = useState(item === null ? "angular" : item);

  //Fetching API.
  useEffect(() => {
    fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${option}&page=${page}`
    )
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setArticles(data.hits);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [option, page]);

  //Reset Pages and save select option in LocalStore (But the option is not persist by selected).
  const handleChange = (e) => {
    localStorage.setItem("selectedOption", e.value);
    setOption(localStorage.getItem("selectedOption"));
    setPage(0);
  };

  //Pagination, Next, Previous and when you click in a number.
  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(0);
    }
  };
  const handlePage = (e) => {
    setPage(Number(e.target.id));
  };
  const handleNext = () => {
    if (page < 8) {
      setPage(page + 1);
    } else {
      setPage(8);
    }
  };

  return (
    <>
      <Header />
      <Nav />

      {error ? (
        <Error>Error Response</Error>
      ) : !isLoaded ? (
        <Loading />
      ) : (
        <Container>
          <Options method={handleChange} />

          <Grid>
            {articles.map(
              (article, index) =>
                article.author &&
                article.story_title &&
                article.story_url &&
                article.created_at && (
                  <News
                    id={article.objectID}
                    key={article.objectID}
                    author={article.author}
                    story_title={article.story_title}
                    story_url={article.story_url}
                    created_at={article.created_at}
                    fav={false}
                  />
                )
            )}
          </Grid>

          <Pagination
            active={page}
            prev={handlePrev}
            page={handlePage}
            next={handleNext}
          />
        </Container>
      )}
    </>
  );
};
export default Home;
