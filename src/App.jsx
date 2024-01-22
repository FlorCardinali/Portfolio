import NavBar from "./components/NavBar"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="container-fluid ">
      <header className="container-fluid bg-bgColor">
        <NavBar/>
        <Hero/>
      </header>
      <main className="bg-bgColor">

      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
