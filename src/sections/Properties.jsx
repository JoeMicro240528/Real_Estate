import { useEffect } from "react"
import { useDarkMode } from "../component/DarkModeContext"
import AOS from "aos";
import { property } from '../component/export'
import 'aos/dist/aos.css'
import { FaBath, FaBed, FaCamera, FaHeart, FaMapMarkerAlt, FaPlus, FaShareAlt, FaUserCircle, FaVideo } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";


function Properties() {
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
    <div className={`${darkMode ? 'dark bg-black ' : 'light bg-transparent'}`}>
      <section id="properties" className="w-full lg:w-[90%] m-auto px-6 lg:px-20 py-20
        flex flex-col justify-center items-start gap-10 ">
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos='zoom-in' className="text-red-500 dark:text-white" > PROPERTIES</h1>
          <h1 data-aos='zoom-in' className="text-black text-4xl font-semibold dark:text-white" >Explore the latest</h1>
        </div>

        {/*  proprtey grid start from her */}
        <div id="grid-box" className="w-full grid grid-cols-1 lg:grid-cols-3 
        justify-center items-center gap-8 ">
          {
            property.map((item, index) => (
              <div data-aos="zoom-in" data-aos-delay='200' key={index}
                className="bg-white dark:bg-gray-800 rounded-xl w-full">
                <div id="img-box" className="bg-cover bg-center h-[250px]
                          p-4 rounded-xl flex flex-col justify-between items-end " style={{
                    backgroundImage: `url(${item.images})`
                  }}>
                  <div id="top" className="w-full flex justify-between items-end">
                    <div><button className="px-3 py-1 bg-red-600 hover:bg-white
                               hover:text-black text-white rounded-full text-[13px] ">Featured
                    </button></div>

                    <div className="flex justify-between items-center gap-3">
                      <button className="px-3 py-1 bg-red-600 hover:bg-white
                               hover:text-black text-white rounded-full text-[13px] ">Sales
                      </button>

                      <button className="px-3 py-1 bg-red-600 hover:bg-white
                               hover:text-black text-white rounded-full text-[13px] ">Active
                      </button>
                    </div>
                  </div>
                  <div id="bottom" className="w-full flex justify-between items-end">
                    <div className="flex justify-start items-center gap-2">
                      <FaMapMarkerAlt className="size-4 text-white" />
                      <h1 className="text-white">{item.address}</h1>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <FaVideo className="size-4 text-white" />
                      <FaCamera className="size-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="px-6 py-3 flex flex-col justify-center items-start
                 gap-2 w-full">
                  <h1 className="text-xl text-black font-semibold dark:text-white">{item.name}</h1>
                  <h1 className="text-2xl text-red-600 font-bold dark:text-white">{item.price}</h1>
                  <p className="dark:text-white"> {item.about}</p>
                  <div id="icons" className="flex justify-center items-start gap-4">
                    <div className="flex justify-center items-start gap-2">
                      <FaBath className="size-5 text-red-400" />
                      <h1 className="dark:text-white">{item.bath}</h1>
                    </div>
                    <div className="flex justify-center items-start gap-2">
                      <FaBed className="size-5 text-red-400" />
                      <h1 className="dark:text-white">{item.bed}</h1>
                    </div>
                    <div className="flex justify-center items-start gap-2">
                      <MdSpaceDashboard className="size-5 text-red-400" />
                      <h1 className="dark:text-white">{item.area}</h1>
                    </div>
                  </div>

                  <div className="w-full h-[1px] mt-8 bg-gray-200 "></div>

                  <div id="owner-info" className="flex justify-between items-center
                  w-full mt-2">
                    <div className="flex justify-center items-center gap-2">
                      <FaUserCircle className="size-5 text-red-400" />
                      <h1 className="dark:text-white">{item.owner}</h1>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <div className="p-2 border-2 border-gray-200 hover:bg-black 
                    cursor-pointer transform hover:scale-110 transition-transform
                     duration-300 "><FaShareAlt className="size-4 text-red-400"></FaShareAlt>
                      </div>
                      <div className="p-2 border-2 border-gray-200 hover:bg-black 
                    cursor-pointer transform hover:scale-110 transition-transform
                     duration-300 "><FaHeart className="size-4 text-red-400"></FaHeart>
                      </div>
                      <div className="p-2 border-2 border-gray-200 hover:bg-black 
                    cursor-pointer transform hover:scale-110 transition-transform
                     duration-300 "><FaPlus className="size-4 text-red-400"></FaPlus>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Properties