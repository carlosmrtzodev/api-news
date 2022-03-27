import "./Error.css";

const Error = ({ children }) => {
  return (
    <div className="error">
      <div className="error__container">
        <h2 className="error__container-title">{children}</h2>
      </div>
    </div>
  );
};
export default Error;
