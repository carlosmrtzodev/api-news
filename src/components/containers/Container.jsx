import "./Container.css";

const Container = ({ children }) => {
  return (
    <main className="home">
      <article className="home__container">
        <section className="home__container-section">{children}</section>
      </article>
    </main>
  );
};
export default Container;
