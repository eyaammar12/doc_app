
 
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import { BiMenu } from "react-icons/bi";
import maskImage from '../../assets/images/mask.png';
import { useEffect, useRef,useContext } from "react";
import { authContext } from "../../context/authContext";

const navLinks = [
  { Path: "/home", display: "Home" },
  { Path: "/doctors", display: "Find a Doctor" },
  { Path: "/services", display: "Services" },
  { Path: "/contact", display: "Contact" },
];

const Header = () => {

  const headerRef=useRef(null)
  const menuRef=useRef(null)
  const {user , role , token} = useContext(authContext)


  // Sticky header functionality
  useEffect(() => {
    const handleStickyHeader = () => {
      const headerElement = headerRef.current;
      if (window.scrollY > 80) {
        headerElement.classList.add("sticky__header");
        headerElement.style.backgroundSize = "cover";
        headerElement.style.backgroundRepeat = "no-repeat";
      } else {
        headerElement.classList.remove("sticky__header");
      }
    };
  
    window.addEventListener("scroll", handleStickyHeader);
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);
  
  const toggleMenu = ()=>menuRef.current.classList.toggle('show__menu')

  return (
    <header className="header bg-cover bg-no-repeat flex items-center h-[80px]" style={{ backgroundImage: `url(${maskImage})` }} ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
        <div>
          <img src={logo} alt="Logo" className="h-12" />
        </div>
          {/* Navigation Section */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.Path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#0067FF] font-[600] !text-[#0067FF]" // Active link styles
                        : "text-[#4E545F] font-[500]"   // Inactive link styles
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* User Avatar Section */}
                  <div className="flex items-center gap-4">

                    {
                      token && user ? <div >
                      <Link to={`${role === 'doctor'? '/doctors/profile/me' : '/users/profile/me' }`}>
                        <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                          <img
                            src={user?.photo}
                            className="w-full h-full object-cover"
                            alt="User Avatar"
                          />
                        </figure>
                        
                      </Link>
                      </div> : <Link to="/Login">
                      <button className="bg-[#0067FF] py-2 px-6 text-white font-[600] h-[44px] flex item-center justify-center rounded-[50px] ">Login</button>
                      </Link>  
                    }
                    
                 
                    <span className="md:hidden" onClick={toggleMenu}>
                      <BiMenu className="w-6 h-6 cursor-pointer "/>
                    </span>
                  </div>
        </div>
        

        

       
        
      </div>
    </header>
  );
};

export default Header;
