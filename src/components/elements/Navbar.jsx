import { NavLinks } from "./NavLinks";

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar__container'>
          <ul className='navbar__container-menu'>
            <NavLinks route='/' text='All' />
            <NavLinks route='/favorites' text='My faves' />
          </ul>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
