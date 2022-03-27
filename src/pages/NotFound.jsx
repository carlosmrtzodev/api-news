import Nav from "../components/elements/Nav";
import Error from "../components/elements/Error";
import Header from "../components/elements/Header";
import Container from "../components/containers/Container";

//404 page
const NotFound = () => {
  return (
    <>
      <Header />
      <Nav />

      <Container>
        <Error>404: This Page Could Not Be Found</Error>
      </Container>
    </>
  );
};
export default NotFound;
