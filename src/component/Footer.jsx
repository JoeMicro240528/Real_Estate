import { useDarkMode } from "../component/DarkModeContext"
import {
    FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaBuilding,
    FaMobile, FaFax, FaArrowUp
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from '../assets/images/prop7.jpg'
import prop8 from '../assets/images/prop8.jpg'
function Footer() {

    const { darkMode, } = useDarkMode();
    return (
        <footer className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'}
            w-full m-auto px-10 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-3 justify-center
            items-start gap-10 lg:gap20`}>
            <div className="flex flex-col justify-center items-start gap-5">
                <h1 className="text-white font-semibold text-2xl">About Us</h1>
                <p className="text-slate-200 text-justify">Lorim ipsum Dolar Site amet counsumer adispline elite.Quet eos hec error subci
                    ipsom iol posiblereplecment counsumer adispline elite.
                </p>
                <div id="social-icons" className="flex justify-start items-center gap-4 mt-4">
                    <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
                 cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <FaFacebook className="size-5" />
                    </div>
                    <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
                 cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <FaInstagram className="size-5" />
                    </div>
                    <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
                 cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <FaTwitter className="size-5" />
                    </div>
                    <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
                 cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <FaYoutube className="size-5" />
                    </div>
                </div>
                <h1 className="text-white mt-8">copyright Real Estate,All Rights Resrved</h1>
            </div>

            <div className="flex flex-col justify-center items-start gap-5">
                <h1 className="text-white font-semibold text-2xl">Contact Us</h1>
                <div className="flex  justify-center items-center gap-3">
                    <FaBuilding className="text-white size-5" />
                    <p className="text-slate-200"> lorem ipsum Dolar site amet constrate adipisting elit</p>
                </div>
                <div className="flex  justify-center items-center gap-3">
                    <FaMobile className="text-white size-5" />
                    <p className="text-slate-200"> +249 11988308</p>
                </div>
                <div className="flex  justify-center items-center gap-3">
                    <FaFax className="text-white size-5" />
                    <p className="text-slate-200"> 24699-56778 </p>
                </div>
                <div className="flex  justify-center items-center gap-3">
                    <IoMdMail className="text-white size-5" />
                    <p className="text-slate-200">yousefalboshra@gmail.com</p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-start gap-5">
                <h1 className="text-white font-semibold text-2xl">latest Properties</h1>
                <div className="flex  justify-center items-center gap-4">
                    <img src={prop7} alt="prop" className="w-[120px] rounded-lg transform 
                    hover:scale-110 transition-transform duration-300 cursor-pointer"/>
                    <div>
                        <h1 className="text-lg text-white">Villa with amazing view</h1>
                        <p className="text-slate-400">287.21</p>
                    </div>
                </div>
                <div className="flex  justify-center items-center gap-4">
                    <img src={prop8} alt="prop" className="w-[120px] rounded-lg transform 
                    hover:scale-110 transition-transform duration-300 cursor-pointer"/>
                    <div>
                        <h1 className="text-lg text-white">Smart view from beach</h1>
                        <p className="text-slate-400">487.51</p>
                    </div>
                </div>
            </div>


            {/*slide-to-up button */}
            <div id="icon-box" className="bg-red-600 p-4 rounded-full hover:bg-black
             cursor-pointer fixed bottom-6 right-6 lg:bottom-12">
                <Link to="hero" spy={true} smooth={true} offset={-100}>
                    <FaArrowUp className="size-6 text-white" />
                </Link>
            </div>

          

           
          
        </footer>
    )
}

export default Footer