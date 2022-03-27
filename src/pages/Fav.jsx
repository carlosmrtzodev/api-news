import Nav from "../components/elements/Nav";
import News from "../components/elements/News";
import Grid from "../components/containers/Grid";
import Header from "../components/elements/Header";
import Container from "../components/containers/Container";

const Fav = () => {
  const favorites = JSON.parse(localStorage.getItem("fav"));

  return (
    <>
      <Header />
      <Nav />

      <Container>
        <Grid>
          {favorites.map(
            (favorite) =>
              favorite.author &&
              favorite.story_title &&
              favorite.story_url &&
              favorite.created_at && (
                <News
                  key={favorite.objectID}
                  author={favorite.author}
                  story_title={favorite.story_title}
                  story_url={favorite.story_url}
                  created_at={favorite.created_at}
                  fav={true}
                />
              )
          )}
        </Grid>
      </Container>
    </>
  );
};
export default Fav;
