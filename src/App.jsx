import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Proyects from "./components/Proyects"
//  bg-gradient-to-t to-bgColor from-secondary

function App() {
  return (
    <div className="container-fluid">
      <header className="container-fluid ">
        <NavBar/>
        <Hero/>
      </header>
      <main className="">
        <AboutMe/>
        <Experience/>
        <Education/>
        <Proyects/>
      </main>
      
      <footer>

      </footer>
    </div>
  )
}

export default App
