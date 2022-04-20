import { Main } from "../components/containers/Main";
import { Error } from "../components/elements/Error";
import { Header } from "../components/elements/Header";
import { Navbar } from "../components/elements/Navbar";
import { Section } from "../components/containers/Section";

const NotFound = () => {
  return (
    <>
      <Header />
      <Navbar />

      <Main>
        <Section page='section__error'>
          <Error>404: This Page Could Not Be Found.</Error>
        </Section>
      </Main>
    </>
  );
};

export { NotFound };
