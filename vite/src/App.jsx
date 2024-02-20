import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Proyects from "./components/Proyects"
import Studies from "./components/Studies"
import Contact from "./components/Contact"
import Footer from "./components/Footer"



function App() {
  return (
      <div className="container-fluid overflow-hidden ">
        <header className="container-fluid ">
          <NavBar/>
          <Hero/>
        </header>
        <main className="">
          <AboutMe />
          <Experience/>
          <Proyects/>
          <Studies/>
          <Contact/>
        </main>
        
        <footer>
          <Footer/>
        </footer>
      </div>
  )
}

export default App
