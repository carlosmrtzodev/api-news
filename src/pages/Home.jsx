import { useNews } from "../hooks/useNews";
import { News } from "../components/elements/News";
import { Main } from "../components/containers/Main";
import { Error } from "../components/elements/Error";
import { Grid } from "../components/containers/Grid";
import { Title } from "../components/elements/Title";
import { Header } from "../components/elements/Header";
import { Navbar } from "../components/elements/Navbar";
import { Loading } from "../components/elements/Loading";
import { Options } from "../components/elements/Options";
import { Section } from "../components/containers/Section";
import { Pagination } from "../components/elements/Pagination";

const Home = () => {
  const {
    page,
    error,
    articles,
    loading,
    handlePrev,
    handlePage,
    handleNext,
    numberPages,
    handleChange,
    numberElements,
  } = useNews();

  return (
    <>
      <Header />
      <Navbar />

      <Main>
        <Section page='section__home'>
          {error ? (
            <Error>503: Service Unavailable.</Error>
          ) : !loading ? (
            <Loading />
          ) : (
            <>
              <Title>News</Title>
              <Options method={handleChange} elements={numberElements} />

              <Grid>
                {articles.map(
                  (article) =>
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
                        favorite={false}
                      />
                    )
                )}
              </Grid>

              <Pagination
                currentPage={page}
                prev={handlePrev}
                page={handlePage}
                next={handleNext}
                pages={numberPages}
              />
            </>
          )}
        </Section>
      </Main>
    </>
  );
};

export { Home };
