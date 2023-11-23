import { useState } from 'react';
import headerLogo from '../assets/images/headerLogo.png';
 {/*import { navLinks } from '../constants';*/}
import { routes } from '../router';
import { Link,useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate()
  function goToReceive(){
    navigate("/receive")
  }
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="xl:ml-10 xl:mt-5 sm:mt-0 sm:pt-20 md:pt-0 padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container relative">
        <a href="/">
          <img src={headerLogo} width={340} height={60} alt="Logo" />
        </a>

        {/* Hamburger menu button */}
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none relative z-10">
            {/* Add your menu icon SVG code here */}
            {/* Example: SVG code for the menu icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Mobile menu, displayed when showMenu is true */}
          {showMenu && (
            <div className="fixed top-0 left-0 w-full h-full bg-primary text-white z-20">
              <button onClick={closeMenu} className="absolute top-0 right-0 m-3 text-white z-30 mr-5">
                X
              </button>
              <ul className="flex flex-col items-center justify-center h-full">
                {routes.map((route, index) => (
                  <li key={index} className="font-inter leading-normal text-xl my-2" onClick={closeMenu}>
                    <Link to={route.path}>{route.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Menu items for larger screens */}
        <ul className="md:flex hidden justify-center items-center gap-7 ml-60  z-10">
          {routes.map((route, index) => (
            <li key={index} className="font-inter leading-normal text-blue text-sm">
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))}
        </ul>

        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none text-white font-medium rounded py-3 px-4 bg-primary  mr-10 hidden lg:block z-10">
          Enquire Now
        </button>
      </nav>
    </header>
  );
};

export default Nav;
