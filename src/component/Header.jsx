import { useState } from "react"
import { Link } from "react-scroll"
import { FaXmark, FaBars } from "react-icons/fa6"
import logo from '../assets/images/logo.png'
import { useDarkMode } from "./DarkModeContext"
import { FaUserCircle, FaPhoneAlt,FaMoon, FaSun } from "react-icons/fa"
function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [isMenuOpen, setIsMenuOpen ] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // const closeMenu = () => {
  //   setIsMenuOpen(false)
  // }


  const navItems = [
    {
      link: "Home", path: "hero"
    },
    {
      link: "About", path: "about"
    },
    {
      link: "Properties", path: "properties"
    },
    {
      link: "Services", path: "services"
    },
    {
      link: "Testimonials", path: "testimonials"
    },
    {
      link: "Contact", path: "contact"
    },
  ]





  return (
    <nav className={`${darkMode ? 'dark bg-black' : 'light bg-[#f3f3f3]'} flex 
       justify-between items-center gap-4 px-4 py-3 lg:px-20 sticky top-0 z-30`}>
      <div id="logo">
        <img src={logo} alt="company logo" className="w-[120px] lg:w-[150px] dark:invert" />
      </div>

      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {
          navItems.map(({ link, path }) => (
            <Link key={path} className="text-black text-[15px] uppercase 
                       font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg
                       hover:bg-red-600 hover:text-white" to={path} spy={true} offset={-100} smooth={true}>
              {link}
            </Link>
          ))}
      </ul>

      {/* { mobile menu start here} */}
      <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className="text-black dark:text-white text-2xl cursor-pointer" />
            : <FaBars className="text-black dark:text-white text-2xl cursor-pointer" />}
        </div>
      </div>

      <div className={`${isMenuOpen ? 'flex ' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute
              top-[80px] left-0`}>
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {
            navItems.map(({ link, path }) => (
              <Link key={path} className="text-white text-[15px] uppercase 
                       font-semibold cursor-pointer p-3 hover:text-black rounded-lg
                       hover:bg-red-600 w-full text-center" to={path} spy={true} offset={-100} smooth={true}>
                {link}
              </Link>
            ))}
        </ul>
      </div>

      <div className="flex justify-center items-center gap-2">
        <div className="flex justify-center items-center gap-2">
          < FaPhoneAlt className="text-black dark:text-white size-4" />
          <p className="text-black dark:text-white">+24911988308</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaUserCircle className="text-black dark:text-white size-5" />
        </div>
        <button onClick={toggleDarkMode} className="flex items-center p-4 rounded-full
                bg-orange-500">
                      {darkMode ? <FaMoon size={25} className="text-black" /> : <FaSun size={25}
            className="text-black" />}
            </button>
            </div>
    </nav>
  )
}

export default Header