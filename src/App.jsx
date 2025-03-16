import {DarkModeProvider} from './component/DarkModeContext'
import Header from './component/Header'
import Hero from './sections/Hero'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import About from './sections/About'
import PopularAreas from './sections/PopularAreas'
import Properties from './sections/Properties'
import Services from './sections/Services'
import Footer from './component/Footer'
function App() {
  return (
    <DarkModeProvider>
        <Header/>
        <Hero/>
        <About/>
        <PopularAreas/>
        <Properties/>
        <Services/>
        <Clients/>
        <Contact/>
        <Footer/>
    </DarkModeProvider>
  )
}

export default App
