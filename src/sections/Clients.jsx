import { useEffect } from "react"
import { useDarkMode } from "../component/DarkModeContext"
import AOS from "aos";
import { client } from '../component/export'
import { FaStar } from "react-icons/fa";
function Clients() {

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
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section id="testimonials" className={`${darkMode ? 'dark bg-gray-800' : 'light bg-transparent'}
        w-full lg:w-[95%] h-fit m-auto rounded-xl flex flex-col justify-center items-start
       mt-22 px-6 lg:px-20 py-20 gap-20`}>
        <div className="flex flex-col justify-center items-start gap-2">
          <h1 data-aos='zoom-in' className="text-red-500 dark:text-white" >OUR CLIENTS</h1>
          <h1 data-aos='zoom-in' className="text-black text-[40px] font-semibold leading-10
           dark:text-white" >What our client  <br></br>saying about us</h1>
        </div>
        <div id="clients-box" className="w-full grid grid-cols-1 lg:grid-cols-3 
                justify-center items-center gap-8 ">
          {
            client.map((item, index) => (
              <div data-aos="zoom-in" data-aos-delay='200' key={index}
                className="bg-white dark:bg-gray-900 h-[350px] flex flex-col
                       justify-center items-start gap-6 w-full p-12 rounded-xl
                        hover:bg-red-100 cursor-pointer">
                    <div className="flex justify-start items-center w-full gap-4 ">
                        <img src={item.image} alt="" className="w-[70px] transform 
                        hover:scale-110 transition-transform duration-300" />
                        <div className="flex flex-col justify-center items-start gap-1">
                            <h1 className="text-xl text-black dark:text-white font-semibold">
                                {item.name}
                            </h1>
                            <h1 className="text-slate-600 dark:text-white">
                                {item.text}
                            </h1>
                        </div>
                    </div>
                    <p className="text-slate-600 text-md text-justify dark:text-white">
                        {item.feedback}
                    </p>
                    <div className="flex justify-start items-start gap-2 w-full">
                        <FaStar className="size-4 text-yellow-400" />
                        <FaStar className="size-4 text-yellow-400" />
                        <FaStar className="size-4 text-yellow-400" />
                        <FaStar className="size-4 text-yellow-400" />
                        <FaStar className="size-4 text-yellow-400" />
                    </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Clients