import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <Link to='/' className='header__container-logo'>
            HACKER NEWS
          </Link>
        </div>
      </header>
    </>
  );
};

export { Header };
