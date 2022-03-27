import Nav from "../components/elements/Nav";
import News from "../components/elements/News";
import Grid from "../components/containers/Grid";
import Error from "../components/elements/Error";
import Header from "../components/elements/Header";
import Container from "../components/containers/Container";

//Faves Page.
const Fav = () => {
  //Get Faves Obj in Local Storage.
  const favorites = JSON.parse(localStorage.getItem("fav"));

  return (
    <>
      <Header />
      <Nav />

      {favorites ? (
        favorites.map(
          (favorite) =>
            favorite.author &&
            favorite.story_title &&
            favorite.story_url &&
            favorite.created_at && (
              <Container>
                <Grid>
                  <News
                    key={favorite.objectID}
                    author={favorite.author}
                    story_title={favorite.story_title}
                    story_url={favorite.story_url}
                    created_at={favorite.created_at}
                    fav={true}
                  />
                </Grid>
              </Container>
            )
        )
      ) : (
        <Error>You do not have favorite posts.</Error>
      )}
    </>
  );
};
export default Fav;
