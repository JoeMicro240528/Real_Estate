import { useEffect } from "react"
import { useDarkMode } from "../component/DarkModeContext"
import area1 from "../assets/images/area1.jpg"
import area2 from "../assets/images/area2.jpg"
import area3 from "../assets/images/area3.jpg"
import AOS from "aos";
import 'aos/dist/aos.css'

function PopularAreas() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, [])
  const { darkMode, } = useDarkMode();

  return (
    <>
      <div className={`${darkMode ? 'dark bg-black ' : 'light bg-transparent'}`}>
        <section className={`${darkMode ? 'dark bg-gray-800 ' : 'light bg-red-100'}
          w-full lg:w-[90%] h-fit m-auto bg-cover bg-center rounded-xl 
          px-6 lg:px-20 py-20 flex flex-col justify-center items-start gap-20  `}>
          <div id='top' className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center
             items-center gap-8">
            <div>
              <h1 data-aos='zoom-in' className="text-red-500 dark:text-white" >POPULAR AREAS</h1>
              <h1 data-aos='zoom-in' className="text-black text-[40px] font-semibold 
               leading-10 mt-4 dark:text-white" >Explore most <br></br> popular areas</h1>
            </div>
            <div className="grid lg:grid-cols-3 col-span-2  grid-cols-1  justify-center items-center  
            gap-6">
              <div data-aos="zoom-in" data-aos-delay="400" style={{ backgroundImage: `url(${area1})` }}
                className="h-[400px]  bg-cover bg-center rounded-xl">
              </div>
              <div data-aos="zoom-in" data-aos-delay="400" style={{ backgroundImage: `url(${area2})` }}
                className="h-[400px] bg-cover bg-center rounded-xl">
              </div>
              <div data-aos="zoom-in" data-aos-delay="400" style={{ backgroundImage: `url(${area3})` }}
                className="h-[400px] bg-cover bg-center rounded-xl">
              </div>
            </div>
          </div>
          <div id="bottom" className="w-full grid grid-cols-1 lg:grid-cols-3  
          justify-start items-center lg:justify-center gap-6">
            <div data-aos="slide-up" data-aos-delay="200" className="w-full flex
              justify-center lg:items-center gap-8">
              <h1 className="text-black text-7xl
                 font-semibold dark:text-white">57K</h1>
              <h1 className="dark:text-slate-300">ACTIVE<br></br>LISTINGS</h1>
            </div>
            <div data-aos="slide-up" data-aos-delay="200" className="w-full flex
              justify-center lg:items-center gap-8">
              <h1 className="text-black text-7xl
                 font-semibold dark:text-white">90K</h1>
              <h1 className="dark:text-slate-300">ACTIVE<br></br>LISTINGS</h1>
            </div>
            <div data-aos="slide-up" data-aos-delay="200" className="w-full flex
              justify-center lg:items-center gap-8">
              <h1 className="text-black text-7xl
                 font-semibold dark:text-white">75K</h1>
              <h1 className="dark:text-slate-300">ACTIVE<br></br>LISTINGS</h1>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PopularAreas