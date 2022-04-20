import { News } from "../components/elements/News";
import { Grid } from "../components/containers/Grid";
import { Error } from "../components/elements/Error";
import { Main } from "../components/containers/Main";
import { Title } from "../components/elements/Title";
import { Header } from "../components/elements/Header";
import { Navbar } from "../components/elements/Navbar";
import { Section } from "../components/containers/Section";

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("fav"));

  return (
    <>
      <Header />
      <Navbar />

      <Main>
        <Section page='section__favorites'>
          {favorites ? (
            <>
              <Title>Favorites</Title>

              <Grid>
                {favorites.map(
                  (favorite, index) =>
                    favorite.author &&
                    favorite.story_title &&
                    favorite.story_url &&
                    favorite.created_at && (
                      <News
                        key={index}
                        author={favorite.author}
                        story_title={favorite.story_title}
                        story_url={favorite.story_url}
                        created_at={favorite.created_at}
                        favorite={true}
                      />
                    )
                )}
              </Grid>
            </>
          ) : (
            <Error>You do not have favorite posts.</Error>
          )}
        </Section>
      </Main>
    </>
  );
};

export { Favorites };
