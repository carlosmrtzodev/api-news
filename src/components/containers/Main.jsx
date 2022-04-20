const Main = ({ children }) => {
  return (
    <main className='main'>
      <article className='main__article'>{children}</article>
    </main>
  );
};

export { Main };
