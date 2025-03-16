import { useEffect } from "react"
import { useDarkMode } from "../component/DarkModeContext"
import AOS from "aos";
function Contact() {

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
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
      <section id="contact" className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'}
       w-full lg:w-[95%] h-fit m-auto rounded-xl grid grid-cols-1 lg:grid-cols-2 justify-center items-center
       lg:px-36 px-6  py-20 gap-10`}>
        <div data-aos='zoom-in' className="bg-white dark:bg-black
         p-10 flex flex-col justify-center items-start rounded-xl gap-4">
          <h1 className="text-2xl text-black dark:text-white font-semibold">
            Send us a message today
          </h1>
          <input type="text" placeholder="Enter your full name"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl" />
          <input type="email" placeholder="Enter your valid email"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl" />
          <input type="number" placeholder="Enter your valid mobile number"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl" />
          <textarea cols='3' rows='5' placeholder="Enter your Message"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"></textarea>
          <button className="bg-red-600 w-full text-md px-8 py-3 text-white
           font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">SEND EMAIL</button>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 p-6">
          <h1 data-aos='zoom-in' className="text-red-500 dark:text-white" >REACH US</h1>
          <h1 data-aos='zoom-in' className="text-black text-[40px] font-semibold leading-10
           dark:text-white" >Lorim ipsum Dolar site amet acounste
            ?
          </h1>
          <p data-aos='zoom-in' className="text-gray-600 text-xl text-justify
           dark:text-white" >Lorim ipsum Dolar site amet acounste
            ipsum doulur site amet consectucer adipisting elite
            ipsum doulur site amet consectucer adipisting elite
            ipsum doulur site amet consectucer adipisting elite
            ipsum doulur site amet consectucer adipisting elite
          </p>
          <button className="bg-red-600 text-md px-8  py-3 text-white
           font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">SEND EMAIL</button>
        </div>
      </section>
    </div>
  )
}

export default Contact