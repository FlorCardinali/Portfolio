import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
//  bg-gradient-to-t to-bgColor from-secondary

function App() {
  return (
    <div className="container-fluid">
      <header className="container-fluid ">
        <NavBar/>
        <Hero/>
      </header>
      <main className="bg-contrast ">
        <AboutMe/>
      </main>
      
      <footer>

      </footer>
    </div>
  )
}

export default App
