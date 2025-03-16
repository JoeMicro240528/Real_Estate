import { useEffect } from "react"
import { useDarkMode } from "../component/DarkModeContext"
import heroImg from "../assets/images/hero1.webp"
import AOS from "aos";
import 'aos/dist/aos.css'
function Hero() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, [])
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
        <section id="hero" className="w-[95%] h-[600px] flex flex-col justify-center
               bg-cover bg-center rounded-xl mx-auto items-start px-10 lg:px-28 gap-7 -z-20"
          style={{ backgroundImage: `url(${heroImg})` }}>
          <h1 data-aos='zoom-in' className="text-6xl text-white font-semibold 
                 pr-0 lg:pr-[500px] lg:leading-[70px] leading-[60px]">Find your next Home in Jada City</h1>
          <p data-aos='zoom-in' className="text-white text-xl lg:pr-[500px]">
            lorim ipsum doulur site amet consectucer adipisting elite.
            ipsum doulur site amet consectucer adipisting elite
            ipsum doulur site amet consectucer adipisting elite
          </p>
        </section>
      </div>

      {/*form starts from hero */}
      <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} z-10`}>
        <div data-aos='zoom-in' id="form" className={`${darkMode ? 'dark bg-gray-800' : 'light bg-white'}
        w-full lg:w-[70%] m-auto grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}>
          <div className="w-full">
            <h1 className="uppercase text-black font-semibold dark:text-white ">Location</h1>
            <input type="text" placeholder="Enter an address, state, city or pincode"
              className="w-full bg-white p-2 mt-2 border-b-[1px] border-[#c9c7c1]" />
          </div>
          <div className="w-full">
            <h1 className="uppercase text-black font-semibold dark:text-white ">type</h1>
            <select name="selectOption" id="selectOption" className="bg-white p-2 
                 border-b-[1px] border-[#c9c7c1] w-full mt-2 text-gray-500 text-md" >
              <option value='' disabled selected>Select Property</option>
              <option value='option1'>Rentals</option>
              <option value='option2'>Salse</option>
              <option value='option3'>Commerical</option>
            </select>
          </div>
          <div className="w-full">
            <h1 className="uppercase text-black font-semibold dark:text-white ">Category</h1>
            <select name="selectOption" id="selectOption" className="bg-white p-2 
                 border-b-[1px] border-[#c9c7c1] w-full mt-2 text-gray-500 text-md" >
              <option value='' disabled selected>Property Category</option>
              <option value='option1'>Apartments</option>
              <option value='option2'>Duples</option>
              <option value='option3'>Condos</option>
              <option value='option3'>Condos</option>
              <option value='option3'>Condos</option>
            </select>
          </div>
          <div className="w-full">
            <button className="bg-red-600 dark:bg-red-700 hover:bg-black
               dark:hover:bg-white dark:hover:text-black w-full text-lg p-4 text-white font-semibold
               rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300 ">SUBMIT </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero