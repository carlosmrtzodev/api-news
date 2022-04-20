import React from "react";

const Section = ({ children, page }) => {
  return (
    <>
      <section className={`section ${page}`}>{children}</section>
    </>
  );
};

export { Section };
