import { useState } from 'react';
import headerLogo from "../assets/images/headerLogo.png";
import { navLinks } from "../constants";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="ml-10 padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={340} height={60} alt="Logo" />
        </a>

        {/* Hamburger menu for mobile view */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {showMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <ul className={`md:flex hidden justify-center items-center gap-7 ml-60 ${showMenu ? "block" : "hidden"}`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-inter leading-normal text-blue text-xs">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className=" bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none text-white font-medium rounded py-3 px-4 bg-primary mr-10 hidden lg:block">Enquire Now</button>
      </nav>
    </header>
  );
};

export default Nav;
