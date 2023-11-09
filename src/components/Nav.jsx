import headerLogo from "../assets/images/headerLogo.png"
import { navLinks } from "../constants"
const Nav = () => {
  return (
     <header className=" ml-10 padding-x py-8 absolute z-10 w-full">
       <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img 
              src={headerLogo}
              width={340}
              height={60}
              />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-7 ml-60 max-lg:hidden">
            {
                navLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="font-inter leading-normal text-blue tex-xs">
                       {item.label}
                      </a>
                      
                    </li>
                    
                ))
            }
          </ul>
          <button className="text-white font-medium rounded py-3 px-4 bg-primary mr-10">Enquire Now</button>
       </nav>
    </header>
  )
}

export default Nav